import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Perfil } from 'src/app/_shared/model/enum/perfil';
import { ShowMessagesService } from '../../../../_shared/services/show-messages.service';
import { Endpoints } from 'src/app/_config/endpoints';
import { Cliente } from 'src/app/_shared/model/cliente.model';

import { ClienteService } from 'src/app/_modules/administrador/services/cliente.service';
import { CepServiceService } from '../../services/cep-service.service';


@Component({
  selector: 'app-cliente-perfil',
  templateUrl: './cliente-perfil.component.html',
  styleUrls: ['./cliente-perfil.component.css']
})
export class ClientePerfilComponent implements OnInit {

      
    cliente: Cliente ;

        perfilDoUsuario: string;
        setorDoUsuario: string;
        nomeDoUsuario: string;
        idDoUsuario:number;
        isCliente: boolean;
        imagemPerfil:string;

    constructor(private http: HttpClient,
        private location: Location, 
        private route: ActivatedRoute, 
        private service: ClienteService, 
        private showMessageService: ShowMessagesService,
        private cepService: CepServiceService
        ) { }


        consultaCep(valor, form){
            this.cepService.buscar(valor).subscribe((dados)=> this.populaForm(dados,form));
        }
        
        populaForm(dados, form){ 
            form.form.patchValue({
                cidade : dados.localidade,
                rua: dados.logradouro,
                bairro : dados.bairro,
                uf:dados.uf
            });
            
        }
    ngOnInit() {
        this.getUsuarioInfos();
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
        this.isCliente = false;
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
            default: {
                this.showMessageService.showNotification('Por favor, faça login novamente');
            }
        }
      
      }

            findByMyself() {
        return this.service.findByMyself();
  }

  update(cliente: Cliente) {
    cliente.cpf=null;
      console.log(cliente);
    this.service.update(cliente).subscribe(x => {
      this.showMessageService.showNotification('Perfil atualizado com sucesso');
      window.location.reload();
    }, err => {
      this.showMessageService.showNotification(err.error.msg, 'danger');
    });
  }
  onSubmit() {
    this.update(this.cliente);
  }
}
