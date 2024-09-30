import { Component } from '@angular/core';
import { Servico } from '../interface/Servico';
import { ServicoService } from '../servicos/servico.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservando',
  templateUrl: './reservando.component.html',
  styleUrl: './reservando.component.scss'
})
export class ReservandoComponent {

  servico!: Servico;

  constructor(
    private servicoService: ServicoService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    const id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.servicoService.findById(id).subscribe(servico => {
      this.servico = servico;
    })
  }

}
