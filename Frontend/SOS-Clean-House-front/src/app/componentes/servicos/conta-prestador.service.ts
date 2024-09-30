import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ContaPrestador } from '../interface/ContaPrestador';
import { Prestador } from '../interface/Prestador';

@Injectable({
  providedIn: 'root'
})
export class ContaPrestadorService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/contaPrestador'; // replace with your backend API URL

  findAll(): Observable<ContaPrestador[]> {
    return this.http.get<ContaPrestador[]>(this.apiUrl);
  }

  findById(id: number): Observable<ContaPrestador> {
    return this.http.get<ContaPrestador>(`${this.apiUrl}/${id}`);
  }

  create(contaPrestador: ContaPrestador): Observable<ContaPrestador> {
    return this.http.post<ContaPrestador>(this.apiUrl, contaPrestador);
  }

  update(contaPrestador: ContaPrestador): Observable<ContaPrestador> {
    return this.http.put<ContaPrestador>(`${this.apiUrl}/${contaPrestador.id}`, contaPrestador);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  findByPrestadorId(id: number): Observable<ContaPrestador> {
    return this.http.get<ContaPrestador>(`${this.apiUrl}/prestador/${id}`);
  }
}