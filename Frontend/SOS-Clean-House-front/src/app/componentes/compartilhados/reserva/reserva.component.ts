import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
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
import { Usuario } from '../../interface/Usuario';
import { ClienteService } from '../../servicos/cliente.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  atividades: string[] = [];
  selectedPeriod: string = '';
  availableTimes: string[] = [];
  valorAgendamento: string = '';
  cliente!: Cliente;
  form: FormGroup;

  agendamento: Agendamento = {
    id: 0,
    status: false,
    dataAgendamento: new Date(),
    dataServico: new Date,
    enderecoServico: {} as EnderecoServico,
    servico: {} as Servico,
    cliente: {} as Cliente,
    prestador: {} as Prestador,
    atividadesAgendadas: [],
    horarioAgendamento: '',
    horarioAgendamentoFim: ''
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
    enderecoAgendamento: {} as Agendamento,
    servicoReference: {} as Servico
  };

  @Input()
  servico!: Servico;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private servicoService: ServicoService,
    private enderecoServicoService: EnderecoServicoService,
    private agendamentoService: AgendamentoService,
    private clienteSercive: ClienteService) {
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

  ngOnInit(): void {
    const idCliente = Number(sessionStorage.getItem('cliente-id'));
    this.clienteSercive.findById(idCliente).subscribe(retorno => {
      this.cliente = retorno;
    });
  }

  ngAfterViewInit() {
    this.atividades = this.servico.atividades;
    this.atualizarCheckboxes();
    this.setValorAgendamento();
  }

  private atualizarCheckboxes(): void {
    const control = <FormArray>this.form.get('atividades');
    this.atividades.forEach(() => control.push(this.fb.control(false)));
  }

  onCheckboxChange(index: number, event: any): void {
    const control = <FormArray>this.form.get('atividades');
    control.at(index).setValue(event.target.checked);
  }

  selectPeriod(period: string): void {
    this.selectedPeriod = period;
    this.setValorAgendamento();

    this.selectedPeriod = period;
    this.updateAvailableTimes();
  }

  updateAvailableTimes() {
    switch (this.selectedPeriod) {
      case 'Manhã':
        this.availableTimes = ['6:00', '7:00', '8:00', '9:00'];
        break;
      case 'Tarde':
        this.availableTimes = ['12:00', '13:00', '14:00', '15:00'];
        break;
      case 'Integral':
        this.availableTimes = ['6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00'];
        break;
      default:
        this.availableTimes = [];
    }
  }

  onStartTimeChange(startTime: string) {
    let endTime: string;
    switch (this.selectedPeriod) {
      case 'Manhã':
      case 'Tarde':
        endTime = this.addHours(startTime, 4);
        break;
      case 'Integral':
        endTime = this.addHours(startTime, 9);
        break;
      default:
        endTime = '';
    }
    this.agendamento.horarioAgendamentoFim = endTime;
  }
  
  addHours(time: string, hours: number): string {
    const [hour, minute] = time.split(':');
    const newHour = parseInt(hour, 10) + hours;
    const newMinute = minute;
    return `${newHour}:${newMinute}`;
  }

  setValorAgendamento() {
    const meia = this.servico.valorDiario4H;
    const inteira = this.servico.valorDiario8H
    if (this.selectedPeriod == 'Manhã' || this.selectedPeriod == 'Tarde') {
      this.valorAgendamento = meia;
    }
    if (this.selectedPeriod == 'Integral') {
      this.valorAgendamento = inteira;
    }
  }

  setHorarioFim() {

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
      enderecoAgendamento: {} as Agendamento,
      servicoReference: {} as Servico
    };

    this.agendamento.servico = this.servico;
    this.agendamento.cliente = this.cliente;
    this.agendamento.atividadesAgendadas = this.atividades.filter((atividade, index) => valoresAtividades[index]);;

    this.agendamentoService.add(this.agendamento).subscribe(novoAgendamento => {

      this.salvarEndereco(novoAgendamento);
      this.router.navigate(['/pagar', novoAgendamento.id]);  // Redirecionar após salvar

    });
  }

  salvarEndereco(novoAgendamento: Agendamento) {
    this.enderecoServico.enderecoAgendamento = novoAgendamento;
    if (this.enderecoServico.id && this.enderecoServico.id != 0) {
      this.enderecoServicoService.update(this.enderecoServico).subscribe(() => {
        console.log('ALTEROU');
      });
    } else {
      this.enderecoServicoService.create(this.enderecoServico).subscribe(() => {
        console.log('CADASTROU');
      });
    }

  }

  getData(data: Date) {
    this.agendamento.dataServico = data;
  }

}