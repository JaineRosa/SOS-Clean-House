import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Horario } from '../interface/Horario';
import { Prestador } from '../interface/Prestador'; 
import { Servico } from '../interface/Servico'; 

@Injectable({
  providedIn: 'root'
})
export class HorarioService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/horario'; // replace with your backend API URL

  findAll(): Observable<Horario[]> {
    return this.http.get<Horario[]>(this.apiUrl);
  }

  findById(id: number): Observable<Horario> {
    return this.http.get<Horario>(`${this.apiUrl}/${id}`);
  }

  create(horario: Horario): Observable<Horario> {
    return this.http.post<Horario>(this.apiUrl, horario);
  }

  update(horario: Horario): Observable<Horario> {
    return this.http.put<Horario>(`${this.apiUrl}/${horario.id}`, horario);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}