import { Cliente } from "./Cliente";
import { DiaCalendario } from "./DiaCalendario";
import { EnderecoServico } from "./EnderecoServico";
import { Prestador } from "./Prestador";
import { Servico } from "./Servico";

export interface Agendamento {
    id: number;
    status: boolean;
    dataAgendamento: Date;
    horarioAgendamento: string;
    horarioAgendamentoFim: string;
    dataServico: Date;
    enderecoServico: EnderecoServico;
    servico: Servico;
    cliente: Cliente;
    prestador: Prestador;
    atividadesAgendadas: string[];
    valorAgendamento: string;
  }