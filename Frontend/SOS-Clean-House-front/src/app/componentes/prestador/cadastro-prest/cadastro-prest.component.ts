import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Prestador } from '../../interface/Prestador';
import { ContaPrestador } from '../../interface/ContaPrestador';
import { Router } from '@angular/router';
import { PrestadorService } from '../../servicos/prestador.service';
import { ContaPrestadorService } from '../../servicos/conta-prestador.service';
import { response } from 'express';
@Component({
  selector: 'app-cadastro-prest',
  templateUrl: './cadastro-prest.component.html',
  styleUrl: './cadastro-prest.component.scss'
})
export class CadastroPrestComponent {
  prestador!: Prestador;
  contaBancaria: ContaPrestador = {
    id: 0,
    nomeTitular: '',
    agencia: 0,
    conta: 0,
    cnpj: '',
    cpf: '',
    prestador: {} as Prestador
  }

  constructor(private router: Router , private prestadorService: PrestadorService, private contaPrestService: ContaPrestadorService) {}

  // telaInicial(event: any) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.router.navigate(['/tela-inicial-prest']);
  // }

  

  
    savePrest() {
      this.prestadorService.create(this.prestador).subscribe((response) => {
        console.log(response);
        this.contaBancaria.prestador = response;
        this.contaPrestService.create(this.contaBancaria).subscribe((response) => {
          console.log(response);
          this.router.navigate(["/tela-inicial-prest"]);
        }, (error) => {
          console.error(error);
          // show error message
        });
      }, (error) => {
        console.error(error);
        // show error message
      });
    }


  ngOnInit(): void {
    this.prestador= {
      id: 0,
      tempoExperiencia: 0,
      antecedentesCriminais: null,
      foto: null,
      documentos: null,
      agendamentos: [],
      atividadesDesenvolvidas: [],
      diaCalendarios: [],
      horarios: [],
      nomeCompleto: '',
      endereco: '',
      telefone: '',
      cpf: '',
      email: '',
      senha: '',
      confirmarSenha: '',
      chats: [],
      contaPrestador: {} as ContaPrestador,
      dataNascimento: new Date(),
      fotoPerfil: null,
      sobreMim: ''
    }
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