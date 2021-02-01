
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteEditarPerfilComponent } from './pages/cliente-editar-perfil/cliente-editar-perfil.component';
import {ClientePerfilComponent} from './pages/cliente-perfil/cliente-perfil.component';
const routes: Routes = [
  
  {
    path: 'cliente-editar-perfil/:id', 
    component: ClienteEditarPerfilComponent,
  },

  {
    path: 'cliente-perfil/:id', 
    component: ClientePerfilComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
