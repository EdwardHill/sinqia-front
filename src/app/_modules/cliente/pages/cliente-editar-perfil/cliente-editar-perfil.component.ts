import { Cliente } from 'src/app/_shared/model/cliente.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { ShowMessagesService } from 'src/app/_shared/services/show-messages.service';
import { ClienteService } from 'src/app/_modules/cliente/services/cliente.service';

@Component({
  selector: 'app-cliente-editar-perfil',
  templateUrl: './cliente-editar-perfil.component.html',
  styleUrls: ['./cliente-editar-perfil.component.css']
})
export class ClienteEditarPerfilComponent implements OnInit {

  cliente: Cliente;


  constructor(
    private service: ClienteService,
    private route: ActivatedRoute,
    private location: Location,
    private showMessageService: ShowMessagesService
  ) { }

  ngOnInit() {
    //const id = +this.route.snapshot.paramMap.get('id');

    this.findByMyself().subscribe(cliente => {
      this.cliente = cliente;
    }, err => {
      this.showMessageService.showNotification(err.error.msg, 'danger');
      this.location.back();
    });

  }

  findByMyself() {
    return this.service.findByMyself();
  }

  update(cliente: Cliente) {
   

    this.service.update(cliente).subscribe(x => {
      this.showMessageService.showNotification('Cliente atualizado com sucesso');
      localStorage.removeItem('cliente/self');
      this.location.back();
    }, err => {
      this.showMessageService.showNotification(err.error.msg, 'danger');
    });
  }

  onSubmit() {
    this.update(this.cliente);
  }

}
