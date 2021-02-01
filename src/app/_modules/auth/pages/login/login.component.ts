import { NgxSpinner, Spinner } from 'ngx-spinner/lib/ngx-spinner.enum';
import { Perfil } from './../../../../_shared/model/enum/perfil';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ShowMessagesService } from 'src/app/_shared/services/show-messages.service';
import { NgxSpinnerService } from 'ngx-spinner';

declare var $: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    usuario = {
        email: null,
        senha: null
    };

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

    onSubmit() {
        this.spinner.show();
        this.authService.login(this.usuario.email, this.usuario.senha).subscribe(result => {
            var route;

            var perfil = this.authService.getPerfilAtualId();

            switch (perfil) {
               
                case Perfil.CLIENTE.valor: {
                    route = 'cliente';
                    break;
                }
                case Perfil.ADMIN.valor: {
                    route = 'administrador';
                    break;
                }
            }



            this.route.navigate([route]).then(() => {
                this.spinner.hide();

            });


        },
            err => {
                this.spinner.hide();
                this.showMessageService.showNotification(err.error.msg, 'danger');
                console.log(err);
            });
    }

}
