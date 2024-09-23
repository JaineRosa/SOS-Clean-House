import { Component, OnInit } from '@angular/core';

import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.scss'
})
export class PagamentoComponent implements OnInit{

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
