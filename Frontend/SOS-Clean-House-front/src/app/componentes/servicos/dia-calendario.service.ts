import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DiaCalendario } from '../interface/DiaCalendario';
import { Prestador } from '../interface/Prestador';

@Injectable({
  providedIn: 'root'
})
export class DiaCalendarioService {
  static getDiaCalendario(): DiaCalendario {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/calendario'; // replace with your backend API URL

  findAll(): Observable<DiaCalendario[]> {
    return this.http.get<DiaCalendario[]>(this.apiUrl);
  }

  findById(id: number): Observable<DiaCalendario> {
    return this.http.get<DiaCalendario>(`${this.apiUrl}/${id}`);
  }

  create(diaCalendario: DiaCalendario): Observable<DiaCalendario> {
    return this.http.post<DiaCalendario>(this.apiUrl, diaCalendario);
  }

  update(diaCalendario: DiaCalendario): Observable<DiaCalendario> {
    return this.http.put<DiaCalendario>(`${this.apiUrl}/${diaCalendario.id}`, diaCalendario);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}