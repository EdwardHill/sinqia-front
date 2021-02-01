import{HttpClient} from '@angular/common/http';
import{Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class CepServiceService{
    constructor(private httpClient: HttpClient){}

   buscar(cep:String) {
        return new Observable((x)=>{
        var request = new XMLHttpRequest();
        request.open('get', `https://viacep.com.br/ws/${cep}/json`, true);
        request.send();
        request.onload = function () {
        var data = JSON.parse(this.response);
        x.next(data)
       
        }
        })
   }
}