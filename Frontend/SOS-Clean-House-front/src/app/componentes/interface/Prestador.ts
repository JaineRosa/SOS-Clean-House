import { Agendamento } from "./Agendamento";
import { AtividadesDesenvolvidas } from "./AtividadesDesenvolvidas";
import { ContaPrestador } from "./ContaPrestador";
import { DiaCalendario } from "./DiaCalendario";
import { Horario } from "./Horario";
import { Usuario } from "./Usuario";

export interface Prestador extends Usuario {
    id: number;
    tempoExperiencia: number;
    antecedentesCriminais: Uint8Array | null; 
    foto: Uint8Array| null; 
    documentos: Uint8Array | null;
    sobreMim: string;
  
    agendamentos: Agendamento[];
    atividadesDesenvolvidas: AtividadesDesenvolvidas[];
    diaCalendarios: DiaCalendario[];
    contaPrestador: ContaPrestador;
    horarios: Horario[];
  }