import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/_shared/model/page.model';
import { Cliente } from 'src/app/_shared/model/cliente.model';
import { ShowMessagesService } from 'src/app/_shared/services/show-messages.service';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-listar',
  templateUrl: './cliente-listar.component.html',
  styleUrls: ['./cliente-listar.component.css']
})
export class ClienteListarComponent implements OnInit {

  idDoCliente = -1;
  c = 0;
  clientes: Cliente[];
  clientesPage: Page<Cliente>;

  constructor(
   
    private service: ClienteService,
    private showService: ShowMessagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.findAllClientes();
   /* this.findBySetor(this.idDoSetor, 0).subscribe(clientesPage => {
      this.clientesPage = clientesPage;
    });*/
  }

  findAllClientes() {
    this.service.findAll().subscribe(clientes => {
      this.c = clientes.length;
      this.clientes = clientes;
    });
  }

  delete(id: number) {
    if (confirm('Você deseja apagar este cliente?')) {
      this.service.delete(id).subscribe(x => {
        this.showService.showNotification('Cliente apagado com sucesso');
        this.clientesPage.content = this.clientesPage.content.filter(y => y.id !== id);
        window.location.reload();
      }, err => {
        this.showService.showNotification(err.error.msg, 'danger');
      });
    }
  }


  editar(id: number) {
    this.router.navigate(['administrador/cliente-editar/', id]);
  }
}
