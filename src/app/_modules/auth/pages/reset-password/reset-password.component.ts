import { Router } from '@angular/router';
import { ShowMessagesService } from './../../../../_shared/services/show-messages.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  perfil: number;
  email: string;

  constructor(
    private authService: AuthService,
    private showMessageService: ShowMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initCard();
  }

  onSubmit() {
    this.authService.enviarEmailDeRecuperacaoDeSenha(this.email).subscribe(() => {
      this.showMessageService.showNotification('Verifique seu e-mail por favor para redefinir sua senha');
      this.router.navigate(['/login']);
    },
    err => {
      console.log(this.email);
      this.showMessageService.showNotification('Email não encontrado.', 'danger');

    })
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



}
