import { Prestador } from "./Prestador";
import { Servico } from "./Servico";

export interface Horario {
    id: number;
    horarioInicio: number;
    horarioFim: number;
    meioPeriodo: boolean;
    servico: Servico;
    prestador: Prestador;
  }