import { formatCurrency } from "@angular/common";
import {Component} from  "@angular/core";
import { CepServiceService } from "../../services/cep-service.service";

@Component({
    selector: 'app-root',
    templateUrl: './cep.componenet.html',
    styleUrls : ['./cep.componene.css']
})

export class AppComponent{
    title = 'CepVevo';

    constructor(private cepService: CepServiceService){}

        consultaCep(valor, form){
            this.cepService.buscar(valor).subscribe((dados)=> this.populaForm(dados,form));
        }

        populaForm(dados, form){ 
            form.setValue({
                rua: dados.logradouro,
                bairro : dados.bairro,
                cidade : dados.localidade,
                uf: dados.uf
            })
            console.log(dados.cidade);
        }
    }


   
    