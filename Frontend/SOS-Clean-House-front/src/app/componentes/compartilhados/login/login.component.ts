import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../servicos/cliente.service';
import { Cliente } from '../../interface/Cliente';
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
    clienteCartoes: [],
    usuario: {} as Usuario,
    id_usuario: 0
  }
  
  constructor(private router: Router, private clienteService: ClienteService) { }

  erroLogin: boolean = false;

  // entrar(event: any) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   sessionStorage.setItem('userType', 'cliente');
  //   sessionStorage.setItem('cliente-id', this.cliente.id.toString());
  //   sessionStorage.setItem('cliente-nomeCompleto', this.cliente.nomeCompleto);
  //   sessionStorage.setItem('cliente-email', this.cliente.email);
  //   sessionStorage.setItem('userType', 'cliente');
  //   sessionStorage.setItem
  //   this.router.navigate(['/tela-inicial-logado']);
  // }
  realizarLogin() {
    const credenciais = {
      EMAIL: this.cliente.email,
      SENHA: this.cliente.senha
    };

    console.log(this.cliente);
    
    this.clienteService.validarLogin(credenciais).subscribe( clienteValido =>{
      if (clienteValido) {
        console.log("deu cerrttttttttttttttttttooooooooooo");
        
        this.salvarSessao(clienteValido);
        console.log(clienteValido);
        
        this.router.navigate(['/tela-inicial-logado']);
      } else {
        this.erroLogin = true;
      }
    });
  }

  salvarSessao(cliente: Cliente) {
    sessionStorage.setItem('cliente-id', cliente.id.toString());
    sessionStorage.setItem('cliente-nome', cliente.nomeCompleto);
    sessionStorage.setItem('cliente-email', cliente.email);
    sessionStorage.setItem('userType', 'cliente');

  }

}


