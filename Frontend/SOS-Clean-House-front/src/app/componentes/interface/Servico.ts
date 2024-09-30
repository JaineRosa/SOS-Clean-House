import { Agendamento } from "./Agendamento";
import { EnderecoServico } from "./EnderecoServico";
import { Horario } from "./Horario";
import { Prestador } from "./Prestador";
export interface Servico {
  id: number | undefined;
  valorDiario4H: string;
  valorDiario8H: string;
  tempoReserva: string;
  observacoes: string;
  servico: string;
  diasDaSemana: string[];
  atividades: string[];
  prestador: Prestador;
  horario: Horario;
  agendamento?: Agendamento;
  enderecoServico?: EnderecoServico;
  agendamentosRelacionados?: Agendamento[];
  }