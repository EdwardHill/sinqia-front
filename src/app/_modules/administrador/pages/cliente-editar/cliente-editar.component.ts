import { Cliente } from 'src/app/_shared/model/cliente.model';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { ShowMessagesService } from 'src/app/_shared/services/show-messages.service';
import { CepServiceService } from '../../services/cep-service.service';

@Component({
  selector: 'app-cliente-editar',
  templateUrl: './cliente-editar.component.html',
  styleUrls: ['./cliente-editar.component.css']
})
export class ClienteEditarComponent implements OnInit {

  cliente: Cliente;


  constructor(
    private service: ClienteService,
    private route: ActivatedRoute,
    private location: Location,
    private showMessageService: ShowMessagesService,
    private cepService:CepServiceService
  ) { }

  consultaCep(valor, form){
    this.cepService.buscar(valor).subscribe((dados)=> this.populaForm(dados,form));
}

populaForm(dados, form){ 
    form.form.patchValue({
        cidade : dados.localidade,
        rua: dados.logradouro,
        bairro : dados.bairro,
        uf:dados.uf
    });
    
}
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.findById(id).subscribe(cliente => {
      this.cliente = cliente;
    }, err => {
      this.showMessageService.showNotification(err.error.msg, 'danger');
      this.location.back();
    });

  }

  findById(id: number) {
    return this.service.findById(id);
  }

  update(cliente: Cliente) {
   

    this.service.update(cliente).subscribe(x => {
      this.showMessageService.showNotification('Cliente atualizado com sucesso');
      localStorage.removeItem('admin/setor-do-cliente-id');
      this.location.back();
    }, err => {
      this.showMessageService.showNotification(err.error.msg, 'danger');
    });
  }

  onSubmit() {
    this.update(this.cliente);
  }

}
