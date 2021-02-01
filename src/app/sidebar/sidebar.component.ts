import { ShowMessagesService } from 'src/app/_shared/services/show-messages.service';
import { AuthService } from './../_modules/auth/services/auth.service';
import { Endpoints } from 'src/app/_config/endpoints';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import {  ROUTES_CLIENTE, ROUTES_ADMINISTRADOR } from './routes';
import { Perfil } from './../_shared/model/enum/perfil';
import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Cliente } from '../_shared/model/cliente.model';
import { Administrador } from '../_shared/model/administrador.model';

declare const $: any;

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [
    {
        path: '/administrador',
        title: 'Administrador',
        type: 'sub',
        icontype: 'apps',
        collapse: 'administrador',
        children: [
            { path: 'setor-do-cliente-listar', title: 'Setores dos Clientes', ab: 'S' },
            // {path: 'cliente-listar', title: 'Clientes', ab:'C'},
            { path: 'setor-do-vendedor-listar', title: 'Setores dos Vendedores', ab: 'B' },
            { path: 'vendedor-listar', title: 'Vendedores', ab: 'O' },
        ]
    },
    {
        path: '/cliente',
        title: 'Cliente',
        type: 'sub',
        icontype: 'apps',
        collapse: 'cliente',
        children: [
            { path: 'solicitacao-listar', title: 'Solicitações', ab: 'S' },
            // {path: 'cliente-listar', title: 'Clientes', ab:'C'},
            // { path: 'setor-do-operador-listar', title: 'Setores dos Operadores', ab: 'B' },
            // { path: 'operador-listar', title: 'Operadores', ab: 'O' },
        ]
    },
   
    // {
    //     path: '/administrador/setor-do-operador-listar',
    //     title: 'Setores dos Operadores',
    //     type: 'link',
    //     icontype: 'dashboard'
    // },
    // {
    //     path: '/administrador/operador-listar',
    //     title: 'Operadores',
    //     type: 'link',
    //     icontype: 'dashboard'
    // },
    // {
    //     path: '/administrador/setor-do-cliente-listar',
    //     title: 'Setores dos Clientes',
    //     type: 'link',
    //     icontype: 'dashboard'
    // },
    // {
    //     path: '/cliente/solicitacao-listar',
    //     title: 'Minhas solicitações',
    //     type: 'link',
    //     icontype: 'dashboard'
    // },
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/components',
        title: 'Components',
        type: 'sub',
        icontype: 'apps',
        collapse: 'components',
        children: [
            { path: 'buttons', title: 'Buttons', ab: 'B' },
            { path: 'grid', title: 'Grid System', ab: 'GS' },
            { path: 'panels', title: 'Panels', ab: 'P' },
            { path: 'sweet-alert', title: 'Sweet Alert', ab: 'SA' },
            { path: 'notifications', title: 'Notifications', ab: 'N' },
            { path: 'icons', title: 'Icons', ab: 'I' },
            { path: 'typography', title: 'Typography', ab: 'T' }
        ]
    }, {
        path: '/forms',
        title: 'Forms',
        type: 'sub',
        icontype: 'content_paste',
        collapse: 'forms',
        children: [
            { path: 'regular', title: 'Regular Forms', ab: 'RF' },
            { path: 'extended', title: 'Extended Forms', ab: 'EF' },
            { path: 'validation', title: 'Validation Forms', ab: 'VF' },
            { path: 'wizard', title: 'Wizard', ab: 'W' }
        ]
    }, {
        path: '/tables',
        title: 'Tables',
        type: 'sub',
        icontype: 'grid_on',
        collapse: 'tables',
        children: [
            { path: 'regular', title: 'Regular Tables', ab: 'RT' },
            { path: 'extended', title: 'Extended Tables', ab: 'ET' },
            { path: 'datatables.net', title: 'Datatables.net', ab: 'DT' }
        ]
    }, {
        path: '/maps',
        title: 'Maps',
        type: 'sub',
        icontype: 'place',
        collapse: 'maps',
        children: [
            { path: 'google', title: 'Google Maps', ab: 'GM' },
            { path: 'fullscreen', title: 'Full Screen Map', ab: 'FSM' },
            { path: 'vector', title: 'Vector Map', ab: 'VM' }
        ]
    }, {
        path: '/widgets',
        title: 'Widgets',
        type: 'link',
        icontype: 'widgets'

    }, {
        path: '/charts',
        title: 'Charts',
        type: 'link',
        icontype: 'timeline'

    }, {
        path: '/calendar',
        title: 'Calendar',
        type: 'link',
        icontype: 'date_range'
    }, {
        path: '/pages',
        title: 'Pages',
        type: 'sub',
        icontype: 'image',
        collapse: 'pages',
        children: [
            { path: 'pricing', title: 'Pricing', ab: 'P' },
            { path: 'timeline', title: 'Timeline Page', ab: 'TP' },
            { path: 'login', title: 'Login Page', ab: 'LP' },
            { path: 'register', title: 'Register Page', ab: 'RP' },
            { path: 'lock', title: 'Lock Screen Page', ab: 'LSP' },
            { path: 'user', title: 'User Page', ab: 'UP' }
        ]
    }
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

    usuario: any;
    perfilDoUsuario: string;
    setorDoUsuario: string;
    nomeDoUsuario: string;
    idDoUsuario:number;
    imagemPerfil:string;
    
    constructor(
        private http: HttpClient,
        private route: Router,
        private authService: AuthService,
        private router: Router,
        private showMessageService: ShowMessagesService) { }

    public menuItems: any[];
    ps: any;
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    getUsuarioInfos() {

        const perfil = localStorage.getItem('perfil');
        switch (perfil) {
           
            case Perfil.CLIENTE.valor: {
                
                this.http.get<Cliente>(Endpoints.CLIENTE + 'self').subscribe(cliente => {
                    this.idDoUsuario = cliente.id;
                    this.perfilDoUsuario = 'Cliente';
                    this.imagemPerfil = cliente.profile;             
                    this.nomeDoUsuario = cliente.nome;
                });
                break;
            }
            case Perfil.ADMIN.valor: {
                this.http.get<Administrador>(Endpoints.ADMINISTRADOR + 'self').subscribe(administrador => {
                    this.idDoUsuario = administrador.id;
                    this.perfilDoUsuario = 'Administrador';
                    this.imagemPerfil = administrador.profile;
                    this.setorDoUsuario = null;
                    this.nomeDoUsuario = administrador.nome;
                });
                break;
            }
            default: {
                this.authService.logout();
                this.showMessageService.showNotification('Por favor, faça login novamente');
            }
        }

    }

    async ngOnInit() {

        /*this.setoresDosVendedores = await this.http.get<SetorDoVendedor[]>(Endpoints.VENDEDOR).toPromise();

        for (let setor of this.setoresDosVendedores) {
            this.routes_vendedor_setores.push(
                {
                    path: '/cliente/solicitacao-servicos/' + setor.id,
                    title: setor.nome,
                    type: 'link',
                    icontype: 'apps'
                }
            )
        }*/

        var perfil = localStorage.getItem('perfil');
        switch (perfil) {
            
            case Perfil.CLIENTE.valor: {
                // const novoRouterCliente = ROUTES_CLIENTE.concat(this.routes_operador_setores);
                // this.menuItems = novoRouterCliente.filter(menuItem => menuItem);
                this.menuItems = ROUTES_CLIENTE.filter(menuItem => menuItem);
                break;
            }
            case Perfil.ADMIN.valor: {
                this.menuItems = ROUTES_ADMINISTRADOR.filter(menuItem => menuItem);
                break;
            }

        }
        // this.menuItems = ROUTES.filter(menuItem => menuItem);
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            this.ps = new PerfectScrollbar(elemSidebar);
        }

        this.getUsuarioInfos();
    }
    updatePS(): void {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            this.ps.update();
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }

    perfil(id: number) {
        var perfil = localStorage.getItem('perfil');
        switch (perfil) {
            
            case Perfil.CLIENTE.valor: {
                this.router.navigate(['cliente/cliente-editar-perfil/', id]) ; 
                break;
            }
            case Perfil.ADMIN.valor: {
                this.router.navigate(['administrador/admin-perfil/', id]) ; 
            }

        }

               
    }

    
}
