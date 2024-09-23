import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../interface/Cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  cliente: Cliente = {
    id:0,
    nomeCompleto: '',
    endereco: '',
    telefone: '',
    dataNascimento: new Date(),
    cpf: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    fotoPerfil: new Blob(),
    chats: [],
    sexo: '',
    clienteCartoes:[]
  }

  constructor(private router: Router) { }


  entrar(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/tela-inicial-logado']);

  }
}