import { Prestador } from "./Prestador";
import { Servico } from "./Servico";

export interface AtividadesDesenvolvidas {
    id: number;
    atividades: string[];
    valorDiario4H: string;
    valorDiario8H: string;
    tempoReserva: string;
    diasDaSemana: string[];
    servico: string;
  
    prestador: Prestador;
    servicos: Servico[];
  }