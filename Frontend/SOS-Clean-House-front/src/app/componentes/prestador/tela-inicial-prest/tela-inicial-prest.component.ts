import { Component } from '@angular/core';
import { ContaPrestador } from '../../interface/ContaPrestador';
import { Prestador } from '../../interface/Prestador';

@Component({
  selector: 'app-tela-inicial-prest',
  templateUrl: './tela-inicial-prest.component.html',
  styleUrl: './tela-inicial-prest.component.scss'
})
export class TelaInicialPrestComponent {
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
    sobreMim: '',
    id_usuario: 0
  }

  showTab(tabId: string, event: Event) {
    // Hide all tab contents
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function (tab) {
      tab.classList.remove('active');
    });

    // Remove active class from all nav links
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
      link.classList.remove('active');
    });

    // Show the selected tab content
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
      tabElement.classList.add('active');
    }

    // Add active class to the clicked nav link
    if (event.target instanceof HTMLInputElement) { 
      event.target.classList.add('active');
    }
  }
}