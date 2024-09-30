import { Prestador } from "./Prestador";

export interface ContaPrestador {
    id: number;
    nomeTitular: string;
    agencia: string;
    conta: string;
    cnpj: string;
    cpf: string;
    prestador: Prestador;
  }