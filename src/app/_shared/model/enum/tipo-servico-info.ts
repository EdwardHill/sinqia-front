export class TipoServicoInfo {

    public SELECT: Opcao = {
        id: 1,
        valor: 'select'
    };

    public DATE: Opcao = {
        id: 2,
        valor: 'date'
    };

    public TEXTAREA: Opcao = {
        id: 3,
        valor: 'textarea'
    };
}

interface Opcao {
    id: number;
    valor: string;
}
