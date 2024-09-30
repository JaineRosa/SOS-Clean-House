import { Component, Input, OnInit } from '@angular/core';

import * as bootstrap from 'bootstrap';
import { Agendamento } from '../../interface/Agendamento';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.scss'
})
export class PagamentoComponent implements OnInit{

  @Input()
  novoAgendamento!: Agendamento;

  

  ngOnInit(): void {
    // Referencie o botão e adicione o listener ao evento de clique
    const toastTrigger = document.getElementById('liveToastBtn');
    const toastLiveExample = document.getElementById('liveToast');

    if (toastTrigger) {
      toastTrigger.addEventListener('click', () => {
        if (toastLiveExample) {
          const toast = new bootstrap.Toast(toastLiveExample);
          toast.show();
          setTimeout(() => {
            toast.hide();
          }, 1000);
        }
      });
    }
  }
}
