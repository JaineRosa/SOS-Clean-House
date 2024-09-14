import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ClienteCartao } from '../interface/ClienteCartao';
import { Cliente } from '../interface/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteCartaoService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/clienteCartao'; // replace with your backend API URL

  findAll(): Observable<ClienteCartao[]> {
    return this.http.get<ClienteCartao[]>(this.apiUrl);
  }

  findById(id: number): Observable<ClienteCartao> {
    return this.http.get<ClienteCartao>(`${this.apiUrl}/${id}`);
  }

  create(clienteCartao: ClienteCartao): Observable<ClienteCartao> {
    return this.http.post<ClienteCartao>(this.apiUrl, clienteCartao);
  }

  update(clienteCartao: ClienteCartao): Observable<ClienteCartao> {
    return this.http.put<ClienteCartao>(`${this.apiUrl}/${clienteCartao.id}`, clienteCartao);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}