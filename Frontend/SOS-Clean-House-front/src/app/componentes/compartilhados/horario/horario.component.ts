import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrl: './horario.component.scss'
})
export class HorarioComponent {

  @Output() selectedOption = new EventEmitter<string>();

  // Método para emitir o evento quando um botão é clicado
  onSelectOption(option: string) {
    this.selectedOption.emit(option);
  }

}
