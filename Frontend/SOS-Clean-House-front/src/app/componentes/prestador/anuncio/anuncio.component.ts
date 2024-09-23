import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrl: './anuncio.component.scss'
})
export class AnuncioComponent {

  constructor(private router: Router) {}

  editar(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/cadastro-prest']);
  }
}
