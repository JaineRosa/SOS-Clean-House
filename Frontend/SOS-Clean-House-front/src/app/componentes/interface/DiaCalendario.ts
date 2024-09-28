import { Prestador } from "./Prestador";

export interface DiaCalendario {
    id: number;
    data: Date; 
    isDisponibilidade: boolean;
    isIntegral: boolean;
    isMeioManha: boolean;
    isMeioTarde: boolean;
    taxaExtraMeia: number;
    prestador: Prestador;
    diasSemana: string;
  }