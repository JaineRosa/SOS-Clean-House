import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Prestador } from '../interface/Prestador';
import { Agendamento } from '../interface/Agendamento'; 
import { AtividadesDesenvolvidas } from '../interface/AtividadesDesenvolvidas';
import { ContaPrestador } from '../interface/ContaPrestador'; 
import { DiaCalendario } from '../interface/DiaCalendario';
import { Horario } from '../interface/Horario'; 
import { Usuario } from '../interface/Usuario'; 

@Injectable({
  providedIn: 'root'
})
export class PrestadorService {

  constructor(private http: HttpClient) { } 

  private apiUrl = 'http://localhost:8080/prestador'; // replace with your backend API URL

  findAll(): Observable<Prestador[]> {
    return this.http.get<Prestador[]>(this.apiUrl);
  }

  findById(id: number): Observable<Prestador> {
    return this.http.get<Prestador>(`${this.apiUrl}/${id}`);
  }

  create(prestador: Prestador): Observable<Prestador> {
    return this.http.post<Prestador>(this.apiUrl, prestador);
  }

  update(prestador: Prestador): Observable<Prestador> {
    return this.http.put<Prestador>(`${this.apiUrl}/${prestador.id}`, prestador);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  validarLogin(credenciais: any): Observable<Prestador> {
    return this.http.post<Prestador>(`${this.apiUrl}/login`, credenciais);
  }
}