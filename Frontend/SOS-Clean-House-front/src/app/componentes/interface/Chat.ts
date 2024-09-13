import { Cliente } from "./Cliente";
import { Mensagem } from "./Mensagem";
import { Prestador } from "./Prestador";
import { Usuario } from "./Usuario";

export interface Chat {
    id: number;
    cliente: Cliente;
    prestador: Prestador;
    mensagens: Mensagem[];
    usuarios: Usuario[];
  }