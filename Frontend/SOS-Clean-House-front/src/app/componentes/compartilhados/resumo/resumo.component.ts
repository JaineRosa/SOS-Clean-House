import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import * as bootstrap from 'bootstrap';
import { Prestador } from '../../interface/Prestador';
import { PrestadorService } from '../../servicos/prestador.service';
import { Agendamento } from '../../interface/Agendamento';
import { AgendamentoService } from '../../servicos/agendamento.service';
@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrl: './resumo.component.scss'
})
export class ResumoComponent {

  @Input()
  agendamento!: Agendamento;

  constructor(private router: Router, private agendamentoService: AgendamentoService ) {}

  ngOnInit(): void {
    
  }
 

  showToast(): void {
    const toastElement = document.getElementById('cancelarToast');
    if (toastElement) {
      const toast = new bootstrap.Toast(toastElement, {
        autohide: true,
        delay: 1000 // 3 seconds
      });
      toast.show();

      setTimeout(() => {
        this.router.navigate(['/tela-inicial']);
    },1000);
  }
  
}}
