import { Cliente } from "./Cliente";
import { Servico } from "./Servico";

export interface EnderecoServico {
    id: number;
    rua: string;
    numero: number;
    bairro: string;
    cidade: string;
    cep: number;
    cliente: Cliente;
    servico: Servico;
    servicoReference: Servico;
  }