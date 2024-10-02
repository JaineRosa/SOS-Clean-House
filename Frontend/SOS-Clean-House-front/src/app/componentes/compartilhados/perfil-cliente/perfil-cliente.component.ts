import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { Cliente } from '../../interface/Cliente';
import { Usuario } from '../../interface/Usuario';
import { ClienteService } from '../../servicos/cliente.service';
@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrl: './perfil-cliente.component.scss'
})
export class PerfilClienteComponent implements OnInit {
  cliente: Cliente = {
    id: 0,
    sexo: '',
    usuario: {} as Usuario,
    clienteCartoes: [],
    id_usuario: 0,
    nomeCompleto: '',
    endereco: '',
    telefone: '',
    dataNascimento: new Date,
    cpf: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    fotoPerfil: null,
    chats: []
  }
  constructor(private clienteService: ClienteService) { }
  isEdicao: boolean = false;

  ngOnInit(): void {

    const clienteId = sessionStorage.getItem('cliente-id');


    if (clienteId) {
      // Chamar o serviço para buscar o prestador pelo ID
      this.clienteService.findById(+clienteId).subscribe(
        (retorno: Cliente) => {
          this.cliente = retorno;



        },
        (error) => {
          console.error('Erro ao buscar prestador:', error);
        }
      );
    } else {
      console.error("Prestador ID não encontrado no sessionStorage");
      return;
    }

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
  enableEditing() {
    this.isEdicao = true;
  }


  salvar() {

    this.clienteService.update(this.cliente).subscribe(
      (clienteAtualizado) => {
        console.log('Perfil atualizado com sucesso');
        console.log(this.cliente);
        const toastLiveExample = document.getElementById('liveToast');
        if (toastLiveExample) {
          const toast = new bootstrap.Toast(toastLiveExample);
          toast.show();

          setTimeout(() => {
            toast.hide();
          }, 3000);  // O toast será exibido por 3 segundos
        }
        this.isEdicao = false;
      },
      (error) => {
        console.error('Erro ao atualizar perfil', error);
      }
    );
  }


}