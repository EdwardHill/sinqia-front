import { NgxSpinner, Spinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { Perfil } from './../../../../_shared/model/enum/perfil';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ShowMessagesService } from 'src/app/_shared/services/show-messages.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {NgForm} from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

     @ViewChild('form', {static: false}) form: NgForm;

    usuario:any = {
        nome: null,
        email: null,
        senha: null,
        cpf: null,
        nascimento: null,
        telefone: {
            tipoTelefone: null,
            ddd: null,
            numero: null
        },
        endereco: {
            cep: '',
            cidade: null,
            bairro: null,
            rua: null,
            numero: null,
            complemento: null,
            uf: null
        }
    };

    exibirFormCliente:boolean = false;

    dddMask = { 
        guide: true,
        showMask: true,
        mask: ['(', /\d/, /\d/, ')']
    };

    phoneMask = {
    guide: true,
    showMask: true,
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  };

    cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];

    cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

constructor(
    private authService: AuthService,
    private route: Router,
    private showMessageService: ShowMessagesService,
    private spinner: NgxSpinnerService
) {

}

ngOnInit() {
    var route;
    let perfil = localStorage.getItem('perfil');
    if (perfil) {
        switch (perfil) {
            case Perfil.CLIENTE.valor: {
                route = 'cliente';
                break;
            }
            case Perfil.ADMIN.valor: {
                route = 'administrador';
                break;
            }
            default: {
                this.showMessageService.showNotification('Por favor, faça login novamente');
                this.authService.logout();
                this.initCard();
                break;
            }
        }

        this.route.navigate([route]);
    }
    this.initCard();
}

initCard() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    body.classList.add('off-canvas-sidebar');
    const card = document.getElementsByClassName('card')[0];
    setTimeout(function () {
        // after 1000 ms we add the class animated to the login/register card
        card.classList.remove('card-hidden');
    }, 700);
}

   

   

    onSubmitCliente() {
        const {nome, sobreNome, email, senha, cpf_cnpj} = this.usuario;
        this.spinner.show();
        this.authService.cadastrarCliente(nome, sobreNome, email, senha, cpf_cnpj).subscribe(result => {
            console.log(result)

            //this.route.navigate(['']).then(() => {
                this.spinner.hide();
                this.showMessageService.showNotification('Conta efetuada com sucesso.', 'success');
            
                this.form.resetForm();
            //});
        },
        err => {
            this.spinner.hide();
            this.showMessageService.showNotification(err.error.msg, 'danger');
            console.log(err);
        });
}

}
