import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, senha: string): Observable<any> {
    return this.http.post('http://localhost:8080/auth/login', { email, senha });
  }
}

