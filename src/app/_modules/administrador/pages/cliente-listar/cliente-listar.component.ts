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

  idDoSetor = -1;
  c = 0;
  setores: Cliente[];
  clientesPage: Page<Cliente>;

  constructor(
   
    private service: ClienteService,
    private showService: ShowMessagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.findAllSetores();
   /* this.findBySetor(this.idDoSetor, 0).subscribe(clientesPage => {
      this.clientesPage = clientesPage;
    });*/
  }

  findAllSetores() {
    this.service.findAll().subscribe(setores => {
      this.c = setores.length;
      this.setores = setores;
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

  findBySetor(id: number, pageNumber: number) {
    return this.service.findAllBySetor(id, pageNumber);
  }

  selecionarSetor() {
    this.service.findAllBySetor(this.idDoSetor, 0).subscribe(clientesPage => {
      this.clientesPage = clientesPage;
    });
  }

  onChangePage(pageNumber: number) {
    this.findBySetor(this.idDoSetor, pageNumber).subscribe(clientesPage => {
      this.clientesPage = clientesPage;
    });
  }

  editar(id: number) {
    this.router.navigate(['administrador/cliente-editar/', id]);
  }
}
