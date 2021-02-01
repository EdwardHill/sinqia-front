import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Endpoints } from '../../../_config/endpoints';
import { Administrador } from '../../../_shared/model/administrador.model';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(private http: HttpClient) { }

  findById(id: number) {
    return this.http.get<Administrador>(Endpoints.ADMINISTRADOR + id);
  }
}
