import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Mensagem } from '../interface/Mensagem'; 
import { Chat } from '../interface/Chat'; 

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/mensagem'; // replace with your backend API URL

  findAll(): Observable<Mensagem[]> {
    return this.http.get<Mensagem[]>(this.apiUrl);
  }

  findById(id: number): Observable<Mensagem> {
    return this.http.get<Mensagem>(`${this.apiUrl}/${id}`);
  }

  create(mensagem: Mensagem): Observable<Mensagem> {
    return this.http.post<Mensagem>(this.apiUrl, mensagem);
  }

  update(mensagem: Mensagem): Observable<Mensagem> {
    return this.http.put<Mensagem>(`${this.apiUrl}/${mensagem.id}`, mensagem);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}