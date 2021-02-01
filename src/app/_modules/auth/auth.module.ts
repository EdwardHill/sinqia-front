import { AuthService } from './services/auth.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { SharedModule } from 'src/app/_shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './services/auth-interceptor.service';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { RedefinirSenhaComponent } from './pages/redefinir-senha/redefinir-senha.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { TextMaskModule } from "angular2-text-mask";

@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent, RedefinirSenhaComponent, CadastroComponent],
  imports: [
    CommonModule,
    FormsModule,
    TextMaskModule,
    AuthRoutingModule,
    SharedModule,
  ],
  providers: [
    AuthService,
  ]
})
export class AuthModule { }
