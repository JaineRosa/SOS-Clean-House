import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.scss'
})
export class FiltroComponent  {

  cleaningType: string = '';
  horarioType: string = '';
  bairroType: string = ''; // Propriedade para armazenar os bairros selecionados
  isVisivel:  boolean = true; // Propriedade para controlar a visibilidade do filtro

  constructor() { }



  onFocus(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    input.type = 'date';
  }

  onBlur(event: FocusEvent) {
    const input = event.target as HTMLInputElement;
    if (!input.value) {
      input.type = 'text';
    }
  }

  onSelectedOption(option: { type: string, value: string }) {
    if (option.type === 'cleaning') {
      this.cleaningType = option.value;
      const cleaningTypeInput = document.getElementById('cleaningTypeInput') as HTMLInputElement;
      if (cleaningTypeInput) {
        cleaningTypeInput.value = option.value;
      }
    } else if (option.type === 'horario') {
      this.horarioType = option.value;
      const horarioTypeInput = document.getElementById('horarioTypeInput') as HTMLInputElement;
      if (horarioTypeInput) {
        horarioTypeInput.value = option.value;
      }
    } else if (option.type === 'bairro') {
      this.bairroType = option.value;
      const bairroTypeInput = document.getElementById('bairroTypeInput') as HTMLInputElement;
      if (bairroTypeInput) {
        bairroTypeInput.value = option.value;
      }
    }
  }

  onBairroSelected(options: string[]) {
    this.bairroType = options.join(', ');
    const bairroTypeInput = document.getElementById('bairroTypeInput') as HTMLInputElement;
    if (bairroTypeInput) {
      bairroTypeInput.value = this.bairroType;
    }
  }
}
