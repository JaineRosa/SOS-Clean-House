import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EnderecoServico } from '../interface/EnderecoServico';
import { Cliente } from '../interface/Cliente';
import { Servico } from '../interface/Servico';

@Injectable({
  providedIn: 'root'
})
export class EnderecoServicoService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/enderecoServico'; // replace with your backend API URL

  findAll(): Observable<EnderecoServico[]> {
    return this.http.get<EnderecoServico[]>(this.apiUrl);
  }

  findById(id: number): Observable<EnderecoServico> {
    return this.http.get<EnderecoServico>(`${this.apiUrl}/${id}`);
  }

  create(enderecoServico: EnderecoServico): Observable<EnderecoServico> {
    return this.http.post<EnderecoServico>(this.apiUrl, enderecoServico);
  }

  update(enderecoServico: EnderecoServico): Observable<EnderecoServico> {
    return this.http.put<EnderecoServico>(`${this.apiUrl}/${enderecoServico.id}`, enderecoServico);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}