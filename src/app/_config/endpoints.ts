import { environment } from './../../environments/environment';
// const api = '/api/';
//const api = 'http://localhost:8080/api/';

let api;

if (environment.production) {
     api = '/api/';
}
else {
     api = 'http://localhost:8080/';
}

// const api = 'https://iopen-1.herokuapp.com/';

export class Endpoints {
    public static AUTH_LOGIN = api + 'login';

    public static ADMINISTRADOR = api + 'admin/';
    public static SETOR_DO_VENDEDOR = api + 'vendedor/';
    public static VENDEDOR = api + 'vendedor/';
    public static SETOR_DO_CLIENTE = api + 'cliente/';
    public static CLIENTE = api + 'cliente/';
    public static PRODUTO = api + 'produto/';
    public static SERVICO = api + 'servico/';
    public static SOLICITACAO = api + 'solicitacao/';
    public static ITEM_SERVICO = api + 'item-servico/';
    public static SOLICITCAO_CONTAGEM = api + 'solicitacao-contagem/';
    public static RESET_PASSWORD = api + 'auth/forgot';

    public static INDICADOR = api + 'indicador/';
    public static INTERACAO = api + 'interacao/';

}

// const api = 'api/';

// export class Endpoints {
//     public static SETOR_DO_OPERADOR = api + 'setor_do_operador/';
//     public static OPERADOR = api + 'operador/';
//     public static SETOR_DO_CLIENTE = api + 'setor_do_cliente/';
//     public static SERVICO = api + 'servico/';
//     public static SOLICITACAO = api + 'solicitacao/';
//     public static ITEM_SERVICO = api + 'item_servico/';
// }