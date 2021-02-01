import { environment } from './../../environments/environment';

let api;

if (environment.production) {
     api = '/api/';
}
else {
     api = 'http://localhost:8080/';
}

export class Endpoints {
    public static AUTH_LOGIN = api + 'login';
    public static ADMINISTRADOR = api + 'admin/';
    public static CLIENTE = api + 'cliente/';
    public static RESET_PASSWORD = api + 'auth/forgot';
}

