import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { ClienteCartao } from '../interface/ClienteCartao';
import { Usuario } from '../interface/Usuario';
import { Cliente } from '../interface/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8080/cliente'; // replace with your backend API URL

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  findById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/${cliente.id}`, cliente);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  
  validarLogin(credenciais: any): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/login`, credenciais);
  }

  uploadProfileImage(userId: number, imagem: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('imagem', imagem);

    return this.http.post(`${this.apiUrl}/${userId}/upload`, formData, { responseType: 'text' });
  }

  getProfileImage(userId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${userId}/imagem-perfil`, { responseType: 'blob' });
  }
}