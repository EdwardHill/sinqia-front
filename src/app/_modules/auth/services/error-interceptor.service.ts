import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ShowMessagesService } from 'src/app/_shared/services/show-messages.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private showMessageService: ShowMessagesService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401].indexOf(err.status) !== -1) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        err.error.msg = 'Erro de autenticação. Verifique seu email ou senha de usuário.';
        this.authService.logout();
      }else if([403].indexOf(err.status) !== -1) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        err.error.msg = 'Você não está autorizado a acessar esse recurso';
        this.authService.logout();
      }
      else if (err.status === 0) {
        this.authService.logout();
        err.error.msg = 'Sistema indisponível';
      }

      return throwError(err);
    }));
  }
}
