import { Chat } from "./Chat";

export interface Mensagem {
    id: number;
    conteudo: string;
    usuario: string;
    chat: Chat;
  }