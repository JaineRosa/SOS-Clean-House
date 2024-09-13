import { Prestador } from "./Prestador";

export interface ContaPrestador {
    id: number;
    nomeTitular: string;
    agencia: number;
    conta: number;
    cnpj: string;
    cpf: string;
    prestador: Prestador;
  }