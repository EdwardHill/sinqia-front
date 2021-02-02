
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientePerfilComponent} from './pages/cliente-perfil/cliente-perfil.component';
const routes: Routes = [
  
 
  {
    path: 'cliente-perfil/:id', 
    component: ClientePerfilComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
