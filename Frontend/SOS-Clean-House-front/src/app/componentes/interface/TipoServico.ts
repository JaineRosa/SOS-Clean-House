import { Servico } from "./Servico";

export interface TipoServico {
    id: number;
    tipoServico: string;
    servicos: Servico[];
  }