import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AtividadesDesenvolvidas } from '../interface/AtividadesDesenvolvidas';
import { Prestador } from '../interface/Prestador';
import { Servico } from '../interface/Servico';

@Injectable({
  providedIn: 'root'
})
export class AtividadesDesenvolvidasService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/atividadesDesenvolvidas'; // replace with your backend API URL

  findAll(): Observable<AtividadesDesenvolvidas[]> {
    return this.http.get<AtividadesDesenvolvidas[]>(this.apiUrl);
  }

  findById(id: number): Observable<AtividadesDesenvolvidas> {
    return this.http.get<AtividadesDesenvolvidas>(`${this.apiUrl}/${id}`);
  }

  create(atividadesDesenvolvidas: AtividadesDesenvolvidas): Observable<AtividadesDesenvolvidas> {
    return this.http.post<AtividadesDesenvolvidas>(this.apiUrl, atividadesDesenvolvidas);
  }

  update(atividadesDesenvolvidas: AtividadesDesenvolvidas): Observable<AtividadesDesenvolvidas> {
    return this.http.put<AtividadesDesenvolvidas>(`${this.apiUrl}/${atividadesDesenvolvidas.id}`, atividadesDesenvolvidas);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
