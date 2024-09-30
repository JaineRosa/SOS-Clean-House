import { Component, Input } from '@angular/core';
import { Servico } from '../../interface/Servico';
import { ServicoService } from '../../servicos/servico.service';
import { Prestador } from '../../interface/Prestador';
import { Horario } from '../../interface/Horario';
import { ContaPrestador } from '../../interface/ContaPrestador';

@Component({
  selector: 'app-card-prest-contratar',
  templateUrl: './card-prest-contratar.component.html',
  styleUrl: './card-prest-contratar.component.scss'
})
export class CardPrestContratarComponent {

  @Input()
  servico!: Servico;

}
