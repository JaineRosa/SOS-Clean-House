import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContaPrestador } from '../../interface/ContaPrestador';
import { Prestador } from '../../interface/Prestador';

@Component({
  selector: 'app-login-prest',
  templateUrl: './login-prest.component.html',
  styleUrl: './login-prest.component.scss'
})
export class LoginPrestComponent {

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

  constructor(private router: Router) { }

  

  entrar(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/tela-inicial-prest']);

  }
}
