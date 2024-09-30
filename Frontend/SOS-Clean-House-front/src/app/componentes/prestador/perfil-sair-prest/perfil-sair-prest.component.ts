import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil-sair-prest',
  templateUrl: './perfil-sair-prest.component.html',
  styleUrl: './perfil-sair-prest.component.scss'
})
export class PerfilSairPrestComponent {

  constructor(private router: Router) {}
  
  

  sair() {
  
    sessionStorage.clear();
    this.router.navigate(['/tela-inicial']);
  }

}
