import { Component } from '@angular/core';
import { ServicoService } from '../servicos/servico.service';
import { Servico } from '../interface/Servico';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrl: './pesquisar.component.scss'
})
export class PesquisarComponent {

  listaServicos: Servico[] = [];

  constructor(
    private servicoService: ServicoService
  ){}

  ngOnInit(){
    this.servicoService.findAll().subscribe(servicos => {
      this.listaServicos = servicos;
    })
  }

}
