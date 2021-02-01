
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/_shared/model/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { ActivatedRoute } from '@angular/router';
import { ShowMessagesService } from 'src/app/_shared/services/show-messages.service';
import { CepServiceService } from '../../services/cep-service.service';

 @Component({
  selector: 'app-cliente-cadastrar',
  templateUrl: './cliente-cadastrar.component.html',
  styleUrls: ['./cliente-cadastrar.component.css']
})
export class ClienteCadastrarComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    email: '',
    senha: '',
    cpf: null,
    nascimento: null, 
    telefone: {
      tipoTelefone: null,
       ddd: null,
      numero: null
    },
    endereco: {
        cep: null,
        cidade: null,
        bairro: null,
        rua:  null,
        numero: null,
        complemento: null,
        uf: null
    },
  };
  

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

  
  constructor(
    private service: ClienteService,
    private router: ActivatedRoute,
    private showMessage: ShowMessagesService,
    private cepService: CepServiceService
  ) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.insert(this.cliente);
  }

  insert(cliente: Cliente) {
    return this.service.insert(cliente).subscribe(x => {
      this.cliente = {
          nome: '',
          email: '',
          senha: '',
          cpf: null,
          nascimento: null, 
          telefone: {
            tipoTelefone: null,
             ddd: null,
            numero: null
          },
          endereco: {
              cep: null,
              cidade: null,
              bairro: null,
              rua:  null,
              numero: null,
              complemento: null,
              uf: null
          },
        };
      this.showMessage.showNotification('Cliente inserido com sucesso');
      window.location.reload();
    }, err => {
      var errorMsg = err.error.msg;
      console.log(err);
      if (err.error.errors) {
        for (const error of err.error.errors) {
          errorMsg += ' ' + error.message;
        }
      }
      
      this.showMessage.showNotification(errorMsg, 'danger');
    });
  }
}
