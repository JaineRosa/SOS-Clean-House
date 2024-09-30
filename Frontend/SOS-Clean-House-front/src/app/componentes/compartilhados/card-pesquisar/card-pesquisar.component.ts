import { Component, Input } from '@angular/core';
import { Servico } from '../../interface/Servico';

@Component({
  selector: 'app-card-pesquisar',
  templateUrl: './card-pesquisar.component.html',
  styleUrl: './card-pesquisar.component.scss'
})
export class CardPesquisarComponent {

  @Input()
  servico!: Servico;

}
