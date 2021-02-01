import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/_shared/model/cliente.model';
import { Endpoints } from 'src/app/_config/endpoints';
import { Page } from 'src/app/_shared/model/page.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  findById(id: number) {
    return this.http.get<Cliente>(Endpoints.CLIENTE + id);
  }
  
  findByMyself() {
    return this.http.get<Cliente>(Endpoints.CLIENTE+'self');
  }

  insert(cliente: Cliente) {
    return this.http.post<Cliente>(Endpoints.CLIENTE, cliente);
  }

  update(cliente: Cliente) {
    return this.http.put<Cliente>(Endpoints.CLIENTE + cliente.id, cliente);
  }

  delete(id: number) {
    return this.http.delete<Cliente>(Endpoints.CLIENTE + id);
  }
}
