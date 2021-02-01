import { ShowMessagesService } from 'src/app/_shared/services/show-messages.service';
import { AuthService } from './../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redefinir-senha',
  templateUrl: './redefinir-senha.component.html',
  styleUrls: ['./redefinir-senha.component.css']
})
export class RedefinirSenhaComponent implements OnInit {

  token: string;
  senha: string;
  senhaRepetida: string;


  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private showMessageService: ShowMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.token = this.route.snapshot.queryParams["token"];

    this.authService.validarToken(this.token).subscribe(() => {

    }, err => {
      this.showMessageService.showNotification(err.error.msg, 'danger');
      this.router.navigate(['/login']);
    })

    this.initCard();
  }

  onSubmit() {



    if (this.senha !== this.senhaRepetida) {
      alert('A senhas têm que ser iguais');
      return;
    }

    this.authService.mudarSenha(this.token, this.senha, this.senhaRepetida).subscribe(() => {
      this.showMessageService.showNotification('Senha alterada com sucesso! Faça login');
      this.router.navigate(['/login']);
    }, err => {
      this.showMessageService.showNotification(err.error.msg, 'danger');
      console.log(err);
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
