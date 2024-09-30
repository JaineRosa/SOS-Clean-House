import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContaPrestador } from '../../interface/ContaPrestador';
import { Prestador } from '../../interface/Prestador';
import { PrestadorService } from '../../servicos/prestador.service';

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
    sobreMim: '',
    id_usuario: 0
  }

  erroLogin: boolean = false;

  constructor(private router: Router, private prestadorService: PrestadorService) { }

  // entrar(event: any) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.realizarLogin(); // Chama o método de validação do login
  // }

  realizarLogin() {
    const credenciais = {
      EMAIL: this.prestador.email,
      SENHA: this.prestador.senha
    };


    this.prestadorService.validarLogin(credenciais).subscribe(prestadorValido => {
      if (prestadorValido) {
        this.salvarSessao(prestadorValido); // Salva as informações da sessão
        console.log(this.salvarSessao);
        this.router.navigate(['/tela-inicial-prest']); // Navega para a tela inicial
      } else {
        this.erroLogin = true; // Exibe erro de login
      }
    });
  }

  salvarSessao(prestador: Prestador) {
    sessionStorage.setItem('prestador-id', prestador.id.toString());
    sessionStorage.setItem('prestador-nomeCompleto', prestador.nomeCompleto);
    sessionStorage.setItem('prestador-email', prestador.email);
    sessionStorage.setItem('userType', 'prestador');
    console.log(prestador.id);
    
  }
}
