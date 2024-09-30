import { Component } from '@angular/core';
import { Agendamento } from '../interface/Agendamento';
import { AgendamentoService } from '../servicos/agendamento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrl: './pagar.component.scss'
})
export class PagarComponent {

  novoAgendamento!: Agendamento;


  constructor(
    private agendamentoService: AgendamentoService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.agendamentoService.findById(id).subscribe((agendamento) => {
      this.novoAgendamento = agendamento;
    })
  }

}
