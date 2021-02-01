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
            { path: 'cliente-perfil', title: 'Editar Perfil', ab: 'S' },
           
        ]
    },
   
  
   
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
        var perfil = localStorage.getItem('perfil');
        switch (perfil) {
            
            case Perfil.CLIENTE.valor: {
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
                this.router.navigate(['cliente/cliente-perfil/', id]) ; 
                break;
            }
            case Perfil.ADMIN.valor: {
                this.router.navigate(['administrador/admin-perfil/', id]) ; 
            }

        }

               
    }

    
}
