import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Cliente } from '../interface/Cliente';
import { Mensagem } from '../interface/Mensagem';
import { Prestador } from '../interface/Prestador';
import { Usuario } from '../interface/Usuario';
import { Chat } from '../interface/Chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/chat'; // replace with your backend API URL

  findAll(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.apiUrl);
  }

  findById(id: number): Observable<Chat> {
    return this.http.get<Chat>(`${this.apiUrl}/${id}`);
  }

  create(chat: Chat): Observable<Chat> {
    return this.http.post<Chat>(this.apiUrl, chat);
  }

  update(chat: Chat): Observable<Chat> {
    return this.http.put<Chat>(`${this.apiUrl}/${chat.id}`, chat);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}