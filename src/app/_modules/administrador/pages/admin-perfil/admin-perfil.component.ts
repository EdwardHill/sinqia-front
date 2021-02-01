import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Perfil } from 'src/app/_shared/model/enum/perfil';
import { ShowMessagesService } from '../../../../_shared/services/show-messages.service';
import { Endpoints } from 'src/app/_config/endpoints';
import { Cliente } from 'src/app/_shared/model/cliente.model';
import { Administrador } from 'src/app/_shared/model/administrador.model';
import { AdministradorService } from '../../services/administrador.service';

@Component({
  selector: 'app-admin-perfil',
  templateUrl: './admin-perfil.component.html',
  styleUrls: ['./admin-perfil.component.css']
})
export class AdminPerfilComponent implements OnInit {

        admin: Administrador;

        perfilDoUsuario: string;
        setorDoUsuario: string;
        nomeDoUsuario: string;
        idDoUsuario:number;
        isAdministrdor: boolean;
        imagemPerfil:string;

    constructor(private http: HttpClient,
        private location: Location, 
        private route: ActivatedRoute, 
        private service: AdministradorService, 
        private showMessageService: ShowMessagesService) { }

    ngOnInit() {
        this.getUsuarioInfos();

        const id = +this.route.snapshot.paramMap.get('id');
        this.findById(id).subscribe(admin => {
            this.admin = admin;
        },
        err => {
            this.showMessageService.showNotification(err.error.msg, 'danger');
            this.location.back();
        }
        )
    }

    getUsuarioInfos() {
        this.isAdministrdor = false;
        const perfil = localStorage.getItem('perfil');
        switch (perfil) {
            
            case Perfil.CLIENTE.valor: {
                this.http.get<Cliente>(Endpoints.CLIENTE + 'self').subscribe(cliente => {
                    this.perfilDoUsuario = 'Cliente';
                    this.imagemPerfil = cliente.profile;
                    this.idDoUsuario = cliente.id;
                    this.nomeDoUsuario = cliente.nome;
                });
                break;
            }
            case Perfil.ADMIN.valor: {
                this.http.get<Administrador>(Endpoints.ADMINISTRADOR + 'self').subscribe(administrador => {
                    this.isAdministrdor = true;
                    this.perfilDoUsuario = 'Administrador';
                    this.imagemPerfil = administrador.profile;
                    this.idDoUsuario = administrador.id;
                    this.nomeDoUsuario = administrador.nome;
                });
                break;
            }
            default: {
                this.showMessageService.showNotification('Por favor, faça login novamente');
            }
        }

    }

    findById(id: number) {
        return this.service.findById(id);
  }

}
