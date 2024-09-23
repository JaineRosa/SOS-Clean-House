import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  constructor(private router: Router) { }

  cadastrar(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/cadastrar']);

  }
}
