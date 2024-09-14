import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TipoServico } from '../interface/TipoServico';
import { Servico } from '../interface/Servico'; 

@Injectable({
  providedIn: 'root'
})
export class TipoServicoService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/tipoServico'; // replace with your backend API URL

  findAll(): Observable<TipoServico[]> {
    return this.http.get<TipoServico[]>(this.apiUrl);
  }

  findById(id: number): Observable<TipoServico> {
    return this.http.get<TipoServico>(`${this.apiUrl}/${id}`);
  }

  create(tipoServico: TipoServico): Observable<TipoServico> {
    return this.http.post<TipoServico>(this.apiUrl, tipoServico);
  }

  update(tipoServico: TipoServico): Observable<TipoServico> {
    return this.http.put<TipoServico>(`${this.apiUrl}/${tipoServico.id}`, tipoServico);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}