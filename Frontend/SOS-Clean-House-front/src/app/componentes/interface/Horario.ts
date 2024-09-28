import { Prestador } from "./Prestador";
import { Servico } from "./Servico";

export interface Horario {
    id: number;
    horarioInicio: String;
    horarioFim: String;
    meioPeriodo: boolean;
    servico: Servico;
    prestador: Prestador;
  }