import { ClienteCartao } from "./ClienteCartao";
import { Usuario } from "./Usuario";

export interface Cliente extends Usuario {
    id: number;
    sexo: string;
    usuario: Usuario;
    clienteCartoes: ClienteCartao[];
  }