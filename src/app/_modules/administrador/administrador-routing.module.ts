import { ClienteEditarComponent } from './pages/cliente-editar/cliente-editar.component';
import { ClienteCadastrarComponent } from './pages/cliente-cadastrar/cliente-cadastrar.component';
import { ClienteListarComponent } from './pages/cliente-listar/cliente-listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminPerfilComponent } from './pages/admin-perfil/admin-perfil.component';


const routes: Routes = [
  
  {
    path: 'cliente-listar', component: ClienteListarComponent,
  },
  {
    path: 'cliente-cadastrar', component: ClienteCadastrarComponent,
  },
  {
    path: 'cliente-editar/:id', component: ClienteEditarComponent,
  },
 
  {
    path: 'admin-perfil/:id', component: AdminPerfilComponent,
  },
  
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
