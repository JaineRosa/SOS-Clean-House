import { Component } from '@angular/core';

@Component({
  selector: 'app-hoje-prest',
  templateUrl: './hoje-prest.component.html',
  styleUrl: './hoje-prest.component.scss'
})
export class HojePrestComponent {

constructor() { }

// Método para o botão "Iniciar Chat"
iniciarChat() {
  alert('Iniciar Chat clicked');
}

// Método para o botão "Localização"
mostrarLocalizacao() {
  alert('Localização clicked');
}
}