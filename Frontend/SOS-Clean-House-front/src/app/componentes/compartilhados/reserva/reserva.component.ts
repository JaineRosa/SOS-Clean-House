import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EnderecoServico } from '../../interface/EnderecoServico';
import { Cliente } from '../../interface/Cliente';
import { Servico } from '../../interface/Servico';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { AtividadesDesenvolvidas } from '../../interface/AtividadesDesenvolvidas';
import { Prestador } from '../../interface/Prestador';
import { ContaPrestador } from '../../interface/ContaPrestador';
import { Router } from '@angular/router';
import { Horario } from '../../interface/Horario';
import { Agendamento } from '../../interface/Agendamento';
import { TipoServico } from '../../interface/TipoServico';
import { ServicoService } from '../../servicos/servico.service';
import { DiaCalendario } from '../../interface/DiaCalendario';
import { DiaCalendarioService } from '../../servicos/dia-calendario.service';
import { EnderecoServicoService } from '../../servicos/endereco-servico.service';
import { response } from 'express';
import { AgendamentoService } from '../../servicos/agendamento.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  atividades: string[] = [];

  ngOnInit(): void {
    this.atividades = [
			'Arrumar a cama',
			'Limpar a cozinha',
			'Lavar roupas',
			'Passar Roupas',
			'Lavar cortinas',
			'Limpar a varanda',
			'Varrer chão',
			'Recolher lixo',
			'Trocar roupas de cama',
			'Organizar armários',
			'Limpar banheiro',
			'Passar pano no chão',
			'Limpar geladeira',
			'Tirar o pó',
			'Limpar janelas e vidros'
		];
    this.atualizarCheckboxes();
  }

  private atualizarCheckboxes(): void {
    const control = <FormArray>this.form.get('atividades');
    this.atividades.forEach(() => control.push(this.fb.control(false)));
  }

  onCheckboxChange(index: number, event: any): void {
    const control = <FormArray>this.form.get('atividades');
    control.at(index).setValue(event.target.checked);
  }

  selectedPeriod: string | null = null;

  constructor(private fb: FormBuilder, private router: Router, private servicoService: ServicoService, private enderecoServicoService: EnderecoServicoService, private agendamentoService: AgendamentoService) {
    this.form = this.fb.group({
      enderecoServico: this.fb.group({
        cep: [''],
        bairro: [''],
        rua: [''],
        cidade: [''],
        observacao: ['']
      }),
      atividades: this.fb.array([])
    });
  }

  selectPeriod(period: string): void {
    this.selectedPeriod = period;
  }

  agendamento: Agendamento = {
    id: 0,
    status: false,
    dataAgendamento: new Date,
    dataservico: {} as DiaCalendario,
    enderecoServico: {} as EnderecoServico,
    servico: {} as Servico,
    cliente: {} as Cliente,
    prestador: {} as Prestador,
    servicosRelacionados: []
  }
  cliente: Cliente = {
    id: 202,
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
    chats: []
  }
  prestador: Prestador = {
    id: 53,
    tempoExperiencia: 0,
    antecedentesCriminais: null,
    foto: null,
    documentos: null,
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
    fotoPerfil: null,
    sobreMim: ''
  };
  horario: Horario = {
    id: 0,
    horarioInicio: "",
    horarioFim: '',
    meioPeriodo: false,
    servico: {} as Servico,
    prestador: {} as Prestador
  }
  servico: Servico = {
    id: 0,
    valorDiario4H: '',
    valorDiario8H: '0',
    tempoReserva: '',
    observacoes: '',
    horarios: [],
    agendamento: {} as Agendamento,
    enderecoServico: {} as EnderecoServico,
    agendamentosRelacionados: [],
    servico: '',
    diasDaSemana: [],
    atividades: [],
    prestador: {} as Prestador
  }
  enderecoServico: EnderecoServico = {
    id: 0,
    rua: '',
    numero: 0,
    bairro: '',
    cidade: '',
    cep: 0,
    observacao: '',
    cliente: {} as Cliente,
    servico: {} as Servico,
    servicoReference: {} as Servico
  };

  form: FormGroup;
 

  pagar(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/pagar']);
  }

  saveReserva(): void {

    const valoresAtividades = this.form.get('atividades')?.value;
		this.servico.atividades = this.atividades.filter((atividade, index) => valoresAtividades[index]);

    const enderecoForm = this.form.get('enderecoServico')?.value;
    this.enderecoServico = {
      id: 0,
      cep: enderecoForm.cep,
      bairro: enderecoForm.bairro,
      rua: enderecoForm.rua,
      cidade: enderecoForm.cidade,
      observacao: enderecoForm.observacao,
      numero: enderecoForm.numero || '',
      cliente: this.cliente,
      servico: this.servico,
      servicoReference: {} as Servico
    };

    const servico: Servico = {
      id: 0,
      valorDiario4H: this.form.get('valorDiario4H')?.value,
      valorDiario8H: this.form.get('valorDiario8H')?.value,
      tempoReserva: this.form.get('tempoReserva')?.value,
      observacoes: this.form.get('enderecoServico.observacao')?.value,
      horarios: [this.horario],
      enderecoServico: this.enderecoServico,
      atividades: this.form.get('atividades')?.value,
      agendamentosRelacionados: [],
      agendamento: {} as Agendamento,
      servico: '',
      diasDaSemana: [],
      prestador: this.prestador
    };

       
    this.servicoService.create(servico).subscribe(
      response => {
        console.log('Serviço salvo com sucesso:', response);

        this.enderecoServicoService.create(this.enderecoServico).subscribe(
          enderecoResponse => {
            console.log('Endereço salvo com sucesso:', enderecoResponse);
          },
          error => {
            console.error('Erro ao salvar endereço:', error);
          }
        );
      },
      error => {
        console.error('Erro ao salvar serviço:', error);
      }
    );

    this.router.navigate(['/pagar']);  // Redirecionar após salvar
  }
}