import { Cliente } from "./Cliente";

export interface ClienteCartao {
    id: number;
    nomeCompleto: string;
    numeroCartao: number;
    dataValidade: Date;
    cvv: number;
    cpf: string;
    favorito: boolean;
    cliente: Cliente;
  }