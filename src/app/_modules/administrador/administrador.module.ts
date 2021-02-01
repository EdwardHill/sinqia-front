import { SharedModule } from './../../_shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {HttpClientModule} from '@angular/common/http';
import  {FormsModule} from '@angular/forms';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { ClienteListarComponent } from './pages/cliente-listar/cliente-listar.component';
import { ClienteCadastrarComponent } from './pages/cliente-cadastrar/cliente-cadastrar.component';
import { ClienteEditarComponent } from './pages/cliente-editar/cliente-editar.component';
import { AdminPerfilComponent } from './pages/admin-perfil/admin-perfil.component';


@NgModule({
  declarations: [
  
    ClienteListarComponent,
    ClienteCadastrarComponent,
    ClienteEditarComponent,
    AdminPerfilComponent,
  
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  providers: []
})
export class AdministradorModule { }
