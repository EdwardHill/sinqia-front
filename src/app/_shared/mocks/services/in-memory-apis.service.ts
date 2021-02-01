
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Cliente } from '../../model/cliente.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryApisService implements InMemoryDbService {


  // servico_infos1: ServicoInfo[] = [
  //   {
  //     id: 1,
  //     nome: 'Formato',
  //     tipo: TipoDeOpcao.select,
  //     opcoes: [
  //       {
  //         id: 1,
  //         nome: '15x20'
  //       },
  //       {
  //         id: 2,
  //         nome: '16x9'
  //       },
  //       {
  //         id: 3,
  //         nome: '27x43'
  //       }
  //     ]
  //   },
  //   {
  //     id: 2,
  //     nome: 'Texto de exemplo',
  //     tipo: TipoDeOpcao.text,
  //   },
  //   {
  //     id: 3,
  //     nome: 'Data de exemplo',
  //     tipo: TipoDeOpcao.data,
  //   }
  // ];

  // servico_infos2: ServicoInfo[] = [
  //   {
  //     id: 3,
  //     nome: 'Comprimento',
  //     tipo: TipoDeOpcao.select,
  //     opcoes: [
  //       {
  //         id: 7,
  //         nome: '5 metros'
  //       },
  //       {
  //         id: 8,
  //         nome: '3 metros'
  //       },
  //       {
  //         id: 9,
  //         nome: '1,5 metros'
  //       }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     nome: 'Background',
  //     tipo: TipoDeOpcao.select,
  //     opcoes: [
  //       {
  //         id: 10,
  //         nome: 'Rosa'
  //       }, {
  //         id: 11,
  //         nome: 'Verde'
  //       }, {
  //         id: 12,
  //         nome: 'Azul'
  //       },
  //     ]
  //   }
  // ]

  letructor() { }

  createDb() {

    // let cliente: Cliente[] = [
    //   {
    //     id: 1,
    //     nome: 'Hugo',
    //     email: 'hugo@hugo.com',
    //     senha: '123456',
    //     telefone: '999998888'
    //   },
    //   {
    //     id: 2,
    //     nome: 'Marília Silva',
    //     email: 'marilia@marilia.com',
    //     senha: '654321',
    //     telefone: '9876543210'
    //   },
    //   {
    //     id: 3,
    //     nome: 'Carlota',
    //     email: 'carlota@carlota.com',
    //     senha: '123456',
    //     telefone: '999998888'
    //   },
    //   {
    //     id: 4,
    //     nome: 'Guinho Carvalho',
    //     email: 'guinho@carvalho.com',
    //     senha: '654321',
    //     telefone: '9876543210'
    //   }
    // ]

    // let setor_do_cliente: SetorDoCliente[] = [
    //   {
    //     id: 1,
    //     nome: 'Contabilidade',
    //     clientes: [cliente[1], cliente[2]]
    //   },
    //   {
    //     id: 2,
    //     nome: 'Marketing',
    //     clientes: [cliente[3], cliente[4]]
    //   },
    // ]

    // var servico: Servico[] = [
    //   {
    //     id: 1,
    //     nome: 'Panfleto',
    //     descricao: 'Panfleto feito com papel de fotografia',
    //     servicosInfo: this.servico_infos1
    //   },
    //   {
    //     id: 2,
    //     nome: 'Banner',
    //     descricao: 'Banner de pano branco',
    //     servicosInfo: this.servico_infos2
    //   },
    //   {
    //     id: 3,
    //     nome: 'Crachá',
    //     descricao: 'Crachá de plástico'
    //   },
    //   {
    //     id: 4,
    //     nome: 'Blusa',
    //     descricao: 'Blusa com estampa'
    //   },
    //   {
    //     id: 5,
    //     nome: 'Caneca',
    //     descricao: 'Caneca estampada'
    //   },
    //   {
    //     id: 6,
    //     nome: 'Pessoa',
    //     descricao: 'Pessoa em tamanho real de papelão'
    //   },
    //   {
    //     id: 7,
    //     nome: 'Propaganda',
    //     descricao: 'Vídeo de propaganda personalizado'
    //   },
    //   {
    //     id: 8,
    //     nome: 'Campanha publicitária',
    //     descricao: 'Campanha personalizada'
    //   },
    // ];



    // var setor_do_operador: SetorDoOperador[] = [
    //   {
    //     id: 1,
    //     nome: 'Marketing',
    //     servicos: [servico[0], servico[1], servico[2], servico[3]],
    //     operadores: [
    //       {
    //         id: 1,
    //         nome: 'Marcilio Carvalho',
    //         email: 'marcilio@carvalho.com',
    //       },
    //       {
    //         id: 2,
    //         nome: 'Thiago Carvalho',
    //         email: 'thiago@carvalho.com',
    //       }
    //     ]
    //   },
    //   {
    //     id: 2,
    //     nome: 'Recursos Humanos',
    //     servicos: [servico[4], servico[5], servico[6], servico[7]],
    //     operadores: [
    //       {
    //         id: 3,
    //         nome: 'Rute da Silva',
    //         email: 'rute@silva.com'
    //       },
    //       {
    //         id: 4,
    //         nome: 'Roberto Cézar',
    //         email: 'robert@cezar.com'
    //       }
    //     ]
    //   }
    // ];

    // var operador: Operador[] = [
    //   {
    //     id: 1,
    //     nome: 'Marcilio Carvalho',
    //     email: 'marcilio@carvalho.com',
    //     setorDoOperador: setor_do_operador[0]
    //   },
    //   {
    //     id: 2,
    //     nome: 'Thiago Carvalho',
    //     email: 'thiago@carvalho.com',
    //     setorDoOperador: setor_do_operador[0]
    //   },
    //   {
    //     id: 3,
    //     nome: 'Rute da Silva',
    //     email: 'rute@silva.com',
    //     setorDoOperador: setor_do_operador[1]
    //   },
    //   {
    //     id: 4,
    //     nome: 'Roberto Cézar',
    //     email: 'robert@cezar.com',
    //     setorDoOperador: setor_do_operador[1]
    //   }
    // ];

    // var solicitacao: Solicitacao[] = [
    //   {
    //     id: 123,
    //     descricao: 'Panfleto para o Carnaval d  Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 Panfleto para o Carnaval de Pesqueira no ano de 2020 ',
    //     status: StatusDaSolicitacao.ESPERANDO_DELEGACAO,
    //     itemServicos: [
    //       {
    //         id: 111,
    //         servicoInfo: this.servico_infos1[0],
    //         valor: '15 x 20'
    //       },
    //       {
    //         id: 112,
    //         servicoInfo: this.servico_infos1[1],
    //         valor: '12/03/2020'
    //       }
    //     ],
    //     servico: servico[1],
    //     publicoAlvo: 'População de Caruaru',
    //     dataAlvo: new Date(2020, 3, 12),
    //     dataDeAbertura: new Date(2020, 1, 15)
    //   }
    // ]

    // return { servico, setor_do_operador, operador, setor_do_cliente, solicitacao };
    return {};
  }
}
