import { Component } from '@angular/core';
import { Agendamento } from '../interface/Agendamento';
import { AgendamentoService } from '../servicos/agendamento.service';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../interface/Cliente';
import { Usuario } from '../interface/Usuario';
import { ClienteService } from '../servicos/cliente.service';

@Component({
  selector: 'app-resumo-reserva',
  templateUrl: './resumo-reserva.component.html',
  styleUrl: './resumo-reserva.component.scss'
})
export class ResumoReservaComponent {

  listaAgendamentos: Agendamento[] = [];

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
  constructor(private clienteService: ClienteService, private agendamentoService: AgendamentoService) { }
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


    this.agendamentoService.getAgendamentosByCliente(clienteId).subscribe(agendamentos => {
      console.log(agendamentos);
      this.listaAgendamentos = agendamentos;
    });

  }

}
