export class StatusDaSolicitacao {

    public static AGUARDANDO_ANALISE: Opcao = {
        id: -2,
        valor: 'Aguardando análise'
    };

    public static AGUARDANDO_INTERACAO_DO_CLIENTE: Opcao = {
        id: -1,
        valor: 'Aguardando Interação do Cliente'
    };

    public static AGUARDANDO_INTERACAO_INICIAL_DO_CLIENTE: Opcao = {
        id: 0,
        valor: 'Aguardando Interação Inicial do Cliente'
    };

    public static AGUARDANDO_ANALISE_INICIAL: Opcao = {
        id: 1,
        valor: 'Aguardando análise inicial'
    };

    public static EM_ATENDIMENTO: Opcao = {
        id: 2,
        valor: 'Em atendimento'
    };

    public static AGUARDANDO_APROVACAO: Opcao = {
        id: 3,
        valor: 'Aguardando aprovação'
    };

    public static ENCERRADA: Opcao = {
        id: 4,
        valor: 'Encerrada'
    };

    public static PAUSADA: Opcao = {
        id: 5,
        valor: 'Pausada'
    };

    public static CANCELADA: Opcao = {
        id: 6,
        valor: 'Cancelada'
    };
}

interface Opcao {
    id: number;
    valor: string;
}