import { Chat } from "./Chat";

export interface Usuario{
    id:number;
    nomeCompleto: string;
    endereco: string;
    telefone: string;
    dataNascimento: Date;
    cpf: string;
    senha: string;
    confirmarSenha: string;
    fotoPerfil: Blob;
    chats: Chat[];
}