import { RedefinirSenhaComponent } from './pages/redefinir-senha/redefinir-senha.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'cadastro',
      component: CadastroComponent
    },
    {
      path: 'reset-password',
      component: ResetPasswordComponent
    },
    {
      path: 'redefinir-senha',
      component: RedefinirSenhaComponent
    },
    {
      path: '**',
      redirectTo: 'login',
      pathMatch: 'full'
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
