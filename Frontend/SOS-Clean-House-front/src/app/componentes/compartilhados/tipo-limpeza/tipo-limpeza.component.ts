import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tipo-limpeza',
  templateUrl: './tipo-limpeza.component.html',
  styleUrl: './tipo-limpeza.component.scss'
})
export class TipoLimpezaComponent {

  @Output() selectedOption = new EventEmitter<string>();

  // Método para emitir o evento quando um botão é clicado
  onSelectOption(option: string) {
    this.selectedOption.emit(option);
  }


}
