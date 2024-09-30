import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-sair-cliente',
  templateUrl: './perfil-sair-cliente.component.html',
  styleUrl: './perfil-sair-cliente.component.scss'
})
export class PerfilSairClienteComponent {

  constructor(private router: Router) {}
  
  sair() {
    // Limpa a sessão e redireciona para a tela inicial de login
    sessionStorage.clear();
    this.router.navigate(['/tela-inicial']);
  }
}
