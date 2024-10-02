import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Servico } from '../interface/Servico';
import { Agendamento } from '../interface/Agendamento'; 
import { AtividadesDesenvolvidas } from '../interface/AtividadesDesenvolvidas'; 
import { EnderecoServico } from '../interface/EnderecoServico'; 
import { Horario } from '../interface/Horario'; 
import { TipoServico } from '../interface/TipoServico'; 

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/servico'; // replace with your backend API URL

  findAll(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.apiUrl);
  }

  findById(id: number): Observable<Servico> {
    return this.http.get<Servico>(`${this.apiUrl}/${id}`);
  }

  create(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.apiUrl, servico);
  }

  update(servico: Servico): Observable<Servico> {
    return this.http.put<Servico>(`${this.apiUrl}/${servico.id}`, servico);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getServicosByPrestador(prestadorId: string | null): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${this.apiUrl}/prestador/${prestadorId}`);
  }
  
}