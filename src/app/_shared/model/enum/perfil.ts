export class Perfil {
    public static ADMIN: Opcao = {
        id : 1,
        valor : 'ROLE_ADMIN',
        descricao: 'Admnistrador'
    };

   
    public static CLIENTE: Opcao = {
        id:3,
        valor: 'ROLE_CLIENTE',
        descricao: 'Cliente'
    };

}

interface Opcao {
    id: number;
    valor: string;
    descricao: string;
}