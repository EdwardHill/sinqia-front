export interface Cliente {
    id?: number;
    nome?: string;
    email?: string;
    senha?: string;
    cpf?:string;
    nascimento?:string;
    profile?:string;
    telefone:{
    ddd?: string;
    numero?: string;
    tipoTelefone?: string;
    },
    endereco:{
        cep?: string;
        cidade?: string;
        uf?: string;
        bairro?: string;
        rua?: string;
        numero?: string;
        complemento?:string;
    };
    
}