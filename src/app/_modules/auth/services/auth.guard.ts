import { Perfil } from './../../../_shared/model/enum/perfil';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    const perfil = localStorage.getItem('perfil');

    if (perfil) {
      if (route.data.perfil && !route.data.perfil.includes(perfil)) {
        this.router.navigate(['/']);
        return false;
      }

      return true;
    }

    this.router.navigate(['auth/login']);
    return false;

  }

}
