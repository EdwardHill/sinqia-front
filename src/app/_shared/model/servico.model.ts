import { TipoServicoInfo } from 'src/app/_shared/model/enum/tipo-servico-info';

export interface Servico {
    id?: number;
    nome?: string;
    descricao?: string;
    servicosInfo?: ServicoInfo[];
    setorDoOperadorNome?: string;
}

export interface ServicoInfo {
    id?: number;
    nome: string;
    tipoServicoInfo: number;
    servicosInfoOpcoes?: ServicoInfoOpcao[];
}

export interface ServicoInfoOpcao {
    id?: number;
    opcao: string;
}
