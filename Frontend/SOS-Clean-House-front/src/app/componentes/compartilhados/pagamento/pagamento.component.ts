import { Component, Input, OnInit } from '@angular/core';

import * as bootstrap from 'bootstrap';
import { Agendamento } from '../../interface/Agendamento';
import { AgendamentoService } from '../../servicos/agendamento.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrl: './pagamento.component.scss'
})
export class PagamentoComponent implements OnInit {

  @Input()
  agendamento!: Agendamento;

  constructor(private router: Router,private agendamentoService: AgendamentoService) { }

  pagar(){
    this.agendamento.status = true;
    
    this.agendamentoService.update(this.agendamento).subscribe(() => {
      this.router.navigate(['/resumo-reserva', this.agendamento.id ])
      
    })
    
   
  }
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
          }, 3000);
        }
      });
    }
  }
}
