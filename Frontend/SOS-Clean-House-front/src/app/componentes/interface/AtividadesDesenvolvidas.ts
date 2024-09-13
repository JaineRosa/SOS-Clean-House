import { Prestador } from "./Prestador";
import { Servico } from "./Servico";

export interface AtividadesDesenvolvidas {
    id: number;
    atividades: string[];
  
    prestador: Prestador;
    servicos: Servico[];
  }