import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Agendamento } from '../interface/Agendamento';
import { DiaCalendario } from '../interface/DiaCalendario';
import { EnderecoServico } from '../interface/EnderecoServico';
import { Servico } from '../interface/Servico';
import { Cliente } from '../interface/Cliente';
import { Prestador } from '../interface/Prestador';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/agendamento';

  findAll(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(this.apiUrl);
  }

  findById(id: number): Observable<Agendamento> {
    return this.http.get<Agendamento>(`${this.apiUrl}/${id}`);
  }

  add(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(this.apiUrl, agendamento);
  }

  update(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.put<Agendamento>(`${this.apiUrl}/${agendamento.id}`, agendamento);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
