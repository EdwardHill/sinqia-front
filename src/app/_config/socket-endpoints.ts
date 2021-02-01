import { environment } from './../../environments/environment';
// const api = 'http://localhost:8080/';
// const api = '/';
// const api = 'https://iopen-1.herokuapp.com/';
const subscribe = '/subscribe/';
const send = '/app-socket/';

export class SocketEndpoints {
    
    

    public static SOCKET = environment.production ? 'ws://' + window.location.host + '/socket' : 'ws://localhost:8080/socket';


    public static SUBS_INTERACAO_POR_SOLICITACAO_ID = subscribe + 'interacao/';
    public static SEND_INTERACAO = send + 'interacao/';

    public static SUBS_SOLICITACAO = subscribe + 'solicitacao/';
    public static SEND_SOLICITACAO = send + 'solicitacao/';
}
