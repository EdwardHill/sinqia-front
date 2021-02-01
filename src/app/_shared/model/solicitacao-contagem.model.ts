export interface SolicitacaoContagem {
    setor: {
        emAtendimento: number;
        paraHoje: number;
        paraAmanha: number;
        encerradas: number;
        canceladas: number;
    },
    operador: {
        emAtendimento: number;
        paraHoje: number;
        paraAmanha: number;
        encerradas: number;
        canceladas: number;
    },
    geral: {
        aguardandoAnaliseInicial: number;
        aguardandoInteracaoInicialDoCliente: number;
    }
}