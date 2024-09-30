import { Component } from '@angular/core';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap'
import { ClienteCartaoService } from '../../servicos/cliente-cartao.service';
import { Router } from '@angular/router';
import { ClienteCartao } from '../../interface/ClienteCartao';
import { Cliente } from '../../interface/Cliente';
import { Usuario } from '../../interface/Usuario';



@Component({
  selector: 'app-cartao-credito',
  templateUrl: './cartao-credito.component.html',
  styleUrl: './cartao-credito.component.scss'
})
export class CartaoCreditoComponent {
  cliente: Cliente = {
    id: 102,
    sexo: '',
    clienteCartoes: [],
    nomeCompleto: '',
    endereco: '',
    telefone: '',
    dataNascimento: new Date,
    cpf: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    fotoPerfil: null,
    chats: [],
    usuario: {} as Usuario,
    id_usuario: 0
  }
clientecartao: ClienteCartao = {
  id: 0,
  nomeCompleto: '',
  numeroCartao: 0,
  dataValidade: new Date,
  cvv: 0,
  cpf: '',
  favorito: false,
  cliente: {} as Cliente
}


  constructor (private clienteCartaoService: ClienteCartaoService, private router: Router) { };

  saveClienteCartao() {
    this.clientecartao.cliente= this.cliente;
    this.clienteCartaoService.create(this.clientecartao).subscribe((response) => {
      console.log(response);
    }, (error) => {
      console.error(error);
      // show error message
    });
  }
}