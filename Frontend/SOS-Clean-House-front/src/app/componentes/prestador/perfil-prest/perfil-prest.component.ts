import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap'
import { Prestador } from '../../interface/Prestador';
import { ContaPrestador } from '../../interface/ContaPrestador';
@Component({
  selector: 'app-perfil-prest',
  templateUrl: './perfil-prest.component.html',
  styleUrl: './perfil-prest.component.scss'
})
export class PerfilPrestComponent implements OnInit{

  prestador: Prestador = {
    id: 0,
    tempoExperiencia: 0,
    antecedentesCriminais: new Uint8Array(),
    foto: new Uint8Array(),
    documentos: new Uint8Array(),
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
    fotoPerfil: new Blob(),
    sobreMim: ''
  }
  contaBancaria: ContaPrestador = {
    id: 0,
    nomeTitular: '',
    agencia: 0,
    conta: 0,
    cnpj: '',
    cpf: '',
    prestador: {} as Prestador
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
          }, 1000);
        }
      });
    }
  }
}
