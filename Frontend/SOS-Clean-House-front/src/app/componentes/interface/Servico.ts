import { Agendamento } from "./Agendamento";
import { AtividadesDesenvolvidas } from "./AtividadesDesenvolvidas";
import { EnderecoServico } from "./EnderecoServico";
import { Horario } from "./Horario";
import { TipoServico } from "./TipoServico";

export interface Servico {
    id: number;
    valorDiario4H: number;
    valorDiario8H: number;
    tempoReserva: number;
  
    horarios: Horario[];
    agendamento: Agendamento;
    enderecoServico: EnderecoServico;
    tipoServico: TipoServico;
    agendamentosRelacionados: Agendamento[];
    atividadesDesenvolvidas: AtividadesDesenvolvidas[];
  }