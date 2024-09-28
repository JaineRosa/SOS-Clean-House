import { Chat } from "./Chat";

export interface Usuario{
    id:number;
    nomeCompleto: string;
    endereco: string;
    telefone: string;
    dataNascimento: Date;
    cpf: string;
    email: string
    senha: string;
    confirmarSenha: string;
    fotoPerfil: Blob | null;
    chats: Chat[];
}