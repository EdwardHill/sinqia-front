import { Endpoints } from 'src/app/_config/endpoints';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Perfil } from './../../../_shared/model/enum/perfil';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';

const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private route: Router) { }

    

    cadastrarCliente(nome: string, sobreNome: string, email: string, senha: string, cpf_cnpj: string): Observable<any> {
  
      return this.http.post(AUTH_API + 'cliente', {
        nome, sobreNome, email, senha, cpf_cnpj
      }, httpOptions);
    }

  login(username: string, password: string): Observable<any> {

    return this.http.post(Endpoints.AUTH_LOGIN, { username, password }, {responseType: 'blob', observe: 'response'}).pipe(tap(
      result => {
        localStorage.setItem('token', result.headers.get('Authorization'));
        localStorage.setItem('perfil', this.getPerfilAtualId());
      }
    ));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('perfil');

    this.route.navigate(['auth/login']);
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }

  public decodePayloadJWT(): { sub: string, role: [{nomeRole: string, authority: string}], string, Setor: number, Usuario: number } {
    try {
      return jwt_decode(this.getToken());
    }
    catch (err) {
      return null;
    }
  }

  public getUsuarioAtualId(): number {
    const payload = this.decodePayloadJWT();
    return payload.Usuario;
  }

  public getSetorAtualId(): number {
    const payload = this.decodePayloadJWT();
    return payload.Setor;
  }

    public getPerfilAtualId(): string {
    const payload = this.decodePayloadJWT();
    return payload.role[0].authority;
  }

  enviarEmailDeRecuperacaoDeSenha(email: any) {
    return this.http.post(Endpoints.RESET_PASSWORD, {email}, httpOptions);
  }

  mudarSenha(token: string, senha: string, senhaRepetida: string) {
    return this.http.post<void>(Endpoints.RESET_PASSWORD + '/reset', {token, senha, senhaRepetida});
  }

  validarToken(token: string) { 
    return this.http.get(Endpoints.RESET_PASSWORD + '/validar-token?token=' + token);
  }
}
