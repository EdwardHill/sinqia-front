import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Perfil } from 'src/app/_shared/model/enum/perfil';
import { ShowMessagesService } from '../../../../_shared/services/show-messages.service';
import { Endpoints } from 'src/app/_config/endpoints';
import { Cliente } from 'src/app/_shared/model/cliente.model';

import { ClienteService } from 'src/app/_modules/administrador/services/cliente.service';

@Component({
  selector: 'app-cliente-perfil',
  templateUrl: './cliente-perfil.component.html',
  styleUrls: ['./cliente-perfil.component.css']
})
export class ClientePerfilComponent implements OnInit {

        cliente: Cliente;

        perfilDoUsuario: string;
        setorDoUsuario: string;
        nomeDoUsuario: string;
        idDoUsuario:number;
        isClienteistrdor: boolean;
        imagemPerfil:string;

    constructor(private http: HttpClient,
        private location: Location, 
        private route: ActivatedRoute, 
        private service: ClienteService, 
        private showMessageService: ShowMessagesService) { }

    ngOnInit() {
        this.getUsuarioInfos();

        //const id = +this.route.snapshot.paramMap.get('id');
        this.findByMyself().subscribe(cliente => {
            this.cliente = cliente;
        },
        err => {
            this.showMessageService.showNotification(err.error.msg, 'danger');
            this.location.back();
        }
        )
    }

    getUsuarioInfos() {
      
                this.http.get<Cliente>(Endpoints.CLIENTE + 'self').subscribe(cliente => {
                    this.perfilDoUsuario = 'Cliente';
                    this.imagemPerfil = cliente.profile;
                    this.idDoUsuario = cliente.id;
                    this.nomeDoUsuario = cliente.nome;
                });
            }
       

            findByMyself() {
        return this.service.findByMyself();
  }

}
