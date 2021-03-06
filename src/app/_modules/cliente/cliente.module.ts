import { SharedModule } from './../../_shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientePerfilComponent } from './pages/cliente-perfil/cliente-perfil.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteService } from '../cliente/services/cliente.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ClientePerfilComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    
    ClienteService,
    
  ]
})
export class ClienteModule { }
