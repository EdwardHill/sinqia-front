import { ClienteEditarComponent } from './pages/cliente-editar/cliente-editar.component';
import { ClienteCadastrarComponent } from './pages/cliente-cadastrar/cliente-cadastrar.component';
import { ClienteListarComponent } from './pages/cliente-listar/cliente-listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminPerfilComponent } from './pages/admin-perfil/admin-perfil.component';


const routes: Routes = [
  /*{
    path: 'setor-do-vendedor-listar', component: SetorDoVendedorListarComponent,
  },
  {
    path: 'setor-do-vendedor-cadastrar', component: SetorDoVendedorCadastrarComponent,
  },
  {
    path: 'setor-do-vendedor-editar/:id', component: SetorDoVendedorEditarComponent ,
  },*/
 /* {
    path: 'vendedor-listar', component: VendedorListarComponent ,
  },
  {
    path: 'vendedor-cadastrar', component: VendedorCadastrarComponent ,
  },
  {
    path: 'vendedor-editar/:id', component: VendedorEditarComponent ,
  },
*/
  /*{
    path: 'setor-do-cliente-listar', component: SetorDoClienteListarComponent ,
  },
  {
    path: 'setor-do-cliente-editar/:id', component: SetorDoClienteEditarComponent ,
  },
  {
    path: 'setor-do-cliente-cadastrar', component: SetorDoClienteCadastrarComponent,
  },*/
  {
    path: 'cliente-listar', component: ClienteListarComponent,
  },
  {
    path: 'cliente-cadastrar', component: ClienteCadastrarComponent,
  },
  {
    path: 'cliente-editar/:id', component: ClienteEditarComponent,
  },
 /*
  {
    path: 'produto-listar', component: ProdutoListarComponent,
  },
  {
    path: 'produto-detalhes/:id', component: ProdutoDetalhesComponent,
  },
  */
  {
    path: 'admin-perfil/:id', component: AdminPerfilComponent,
  },
  /*
  {
    path: '', redirectTo: 'vendedor-listar', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'vendedor-listar', pathMatch: 'full'
  }
  */
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
