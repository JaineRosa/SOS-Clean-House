import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Servico } from '../../interface/Servico';
import { Prestador } from '../../interface/Prestador';
import { ContaPrestador } from '../../interface/ContaPrestador';
import { PrestadorService } from '../../servicos/prestador.service';
import { ServicoService } from '../../servicos/servico.service';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrl: './anuncio.component.scss'
})
export class AnuncioComponent {
  listaServico: Servico[] = [];
  
  prestador:Prestador = {
    id: 0,
    tempoExperiencia: 0,
    antecedentesCriminais: null,
    foto: null,
    documentos: null,
    sobreMim: '',
    agendamentos: [],
    atividadesDesenvolvidas: [],
    diaCalendarios: [],
    contaPrestador: {} as ContaPrestador,
    horarios: [],
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
  servico: Servico = {
    id: undefined,
    valorDiario4H: '',
    valorDiario8H: '',
    tempoReserva: '',
    observacoes: '',
    servico: '',
    diasDaSemana: [],
    atividades: [],
    prestador: {} as Prestador,
    horarios: []
  }

  constructor(private router: Router, private prestadorService: PrestadorService, private servicoService:ServicoService) {}

  ngOnInit(): void {

    const prestadorId = sessionStorage.getItem('prestador-id');


    if (prestadorId) {
      // Chamar o serviço para buscar o prestador pelo ID
      this.prestadorService.findById(+prestadorId).subscribe(
        (retorno: Prestador) => {
          this.prestador = retorno;
        },
        (error) => {
          console.error('Erro ao buscar prestador:', error);
        }
      );
    } else {
      console.error("Prestador ID não encontrado no sessionStorage");
      return;
    }

    this.servicoService.getServicosByPrestador(prestadorId).subscribe(
      servicos => {
        console.log(servicos); // Verifique se isso exibe os serviços no console
        this.listaServico = servicos;
      },
      error => {
        console.error('Erro ao buscar serviços:', error); // Capture possíveis erros
      }
    );
  }

  editar(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/cadastro-prest']);
  }
}
