import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../interface/Cliente';
import { ClienteService } from '../../servicos/cliente.service';
import { Usuario } from '../../interface/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  cliente: Cliente = {
    id: 0,
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
    clienteCartoes: []
  }
  
  constructor(private router: Router, private clienteService: ClienteService) { }

  erroLogin: boolean = false;

  


  realizarLogin() {
    const credenciais = {
      EMAIL: this.cliente.email,
      SENHA: this.cliente.senha
      
    };
    console.log(this.cliente);
    
    this.clienteService.validarLogin(credenciais).subscribe(clienteValido => {
      if (clienteValido) {
        this.salvarSessao(clienteValido);
        this.router.navigate(['/perfil']);
      } else {
        this.erroLogin = true;
      }
    });
  }



  salvarSessao(cliente: Cliente) {
    sessionStorage.setItem('cliente-id', cliente.id.toString());
    sessionStorage.setItem('cliente-nomeCompleto', cliente.nomeCompleto);
    sessionStorage.setItem('cliente-email', cliente.email);

    sessionStorage.setItem

  }

}

