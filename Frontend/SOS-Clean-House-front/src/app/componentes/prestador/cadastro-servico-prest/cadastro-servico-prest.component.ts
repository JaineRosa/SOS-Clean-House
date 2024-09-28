import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TipoServicoService } from '../../servicos/tipo-servico.service';
import { TipoServico } from '../../interface/TipoServico';
import { AtividadesDesenvolvidas } from '../../interface/AtividadesDesenvolvidas';
import { Prestador } from '../../interface/Prestador';
import { Servico } from '../../interface/Servico';
import { DiaCalendario } from '../../interface/DiaCalendario';
import { Agendamento } from '../../interface/Agendamento';
import { EnderecoServico } from '../../interface/EnderecoServico';
import { Horario } from '../../interface/Horario';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';
import { ContaPrestador } from '../../interface/ContaPrestador';
import { HorarioService } from '../../servicos/horario.service';
import { AtividadesDesenvolvidasService } from '../../servicos/atividades-desenvolvidas.service';
import { ServicoService } from '../../servicos/servico.service';
import { response } from 'express';


@Component({
	selector: 'app-cadastro-servico-prest',
	templateUrl: './cadastro-servico-prest.component.html',
	styleUrl: './cadastro-servico-prest.component.scss'
})
export class CadastroServicoPrestComponent implements OnInit {

	atividades: string[] = [];
	tiposServico: string[] = [];
	diasDaSemana: string[] = [];
	temposReserva: string[] = [];
	horarioInicio: string[] = [];
	horarioFim: string[] = [];
	tipoServico: TipoServico[] = [];
	selectServico = [];
	placeholder!: string;

	atividadesDesenvolvidas: AtividadesDesenvolvidas[] = []
	selectAtivDesencoldidas = []

	diasDisponiveis: DiaCalendario[] = [];
	selectDia = [];

	prestador: Prestador = {
		id: 53,
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
		horarios: [],
		agendamento: {} as Agendamento,
		enderecoServico: {} as EnderecoServico,
		agendamentosRelacionados: [],
		servico: '',
		diasDaSemana: [],
		atividades: [],
		prestador: {} as Prestador
	}

	horario: Horario = {
		id: 0,
		horarioInicio: '',
		horarioFim: '',
		meioPeriodo: false,
		servico: {} as Servico,
		prestador: {} as Prestador
	}

	constructor(private fb: FormBuilder, private router: Router, private horarioService: HorarioService, private servicoService: ServicoService) {
		this.form = this.fb.group({
			atividades: this.fb.array([]),
			tiposServico: this.fb.array([]),
			diasDaSemana: this.fb.array([]),
			temposReserva: this.fb.array([]),
			horarioInicio: this.fb.array([]),
			horarioFim: this.fb.array([])
		});
	}

	ngOnInit() {


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
		this.tiposServico = [
			'Limpeza Residêncial',
			'Limpeza Empresarial',
			'Limpeza Predial',
			'Limpeza Apartamento',
			'Limpeza Loft',
			'Limpeza Pós Obra',
			'Passadoria'
		];
		this.diasDaSemana = [
			'Domingo',
			'Segunda-feira',
			'Terça-feira',
			'Quarta-feira',
			'Quinta-feira',
			'Sexta-feira',
			'Sábado'
		];
		this.temposReserva = [
			'30 minutos',
			'1 hora',
			'2 horas',
			'3 horas',
			'6 horas',
			'12 horas',
			'24 horas'
		];
		this.horarioInicio = [
			'05:00', '06:00', '07:00', '08:00', '09:00', '10:00'
		];
		this.horarioFim = [
			'17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
		];

		this.atualizarCheckboxes();
	}


	currentStep: number = 1;


	nextStep(): void {
		if (this.currentStep < 6) {
			this.currentStep++;
		}
	}

	prevStep(): void {
		if (this.currentStep > 1) {
			this.currentStep--;
		}
	}

	finishWizard(): void {


		const valoresAtividades = this.form.get('atividades')?.value;
		this.servico.atividades = this.atividades.filter((atividade, index) => valoresAtividades[index]);
		

		const valoresTiposServicos = this.form.get('tiposServico')?.value;
		const tiposServicoSelecionados: string[] = this.tiposServico.filter((tipo, index) => valoresTiposServicos[index]);
		this.servico.servico = tiposServicoSelecionados.join('');

		const valoresDiasSemana = this.form.get('diasDaSemana')?.value;
		const diasSemanaSelecionados: string[] = this.diasDaSemana.filter((dia, index) => valoresDiasSemana[index]);
		this.servico.diasDaSemana = diasSemanaSelecionados;
		console.log(this.servico);

		const valoresTemposReserva = this.form.get('temposReserva')?.value;
		const tempoReservaSelecionado: string[] = this.temposReserva.filter((tempo, index) => valoresTemposReserva[index]);
		this.servico.tempoReserva = tempoReservaSelecionado.join('');

		const valoresHorariosInicio = this.form.get('horarioInicio')?.value;
		const horariosInicioSelecionados: string[] = this.horarioInicio.filter((horario, index) => valoresHorariosInicio[index]);
		this.horario.horarioInicio = horariosInicioSelecionados.join('');

		const valoresHorariosFim = this.form.get('horarioFim')?.value;
		const horariosFimSelecionados: string[] = this.horarioFim.filter((horario, index) => valoresHorariosFim[index]);
		this.horario.horarioFim = horariosFimSelecionados.join('');
		console.log(this.horario);

		this.horario.prestador = this.prestador;
		this.servico.prestador = this.prestador;
		
		this.servicoService.create(this.servico).subscribe((response) => {
			console.log("deu    certou ");
			this.horario.servico = response;
			this.horarioService.create(this.horario).subscribe((response) => {
		
				console.log("deu    certou  11111111");
			}, (error) => {
				console.error("NAOOO11111");
				// show error message
			});
		}, (error) => {
			console.error("NAOOOO");
			// show error message
		});
		
		
	}

	private atualizarCheckboxes(): void {
		const atividadesControl = <FormArray>this.form.get('atividades');
		const tiposServicoControl = <FormArray>this.form.get('tiposServico');
		const diasSemanacontrol = <FormArray>this.form.get('diasDaSemana');
		const tempoReservacontrol = <FormArray>this.form.get('temposReserva');
		const horarioIniciocontrol = <FormArray>this.form.get('horarioInicio');
		const horarioFimcontrol = <FormArray>this.form.get('horarioFim');

		// Inicializando os checkboxes de atividades
		this.atividades.forEach(() => atividadesControl.push(this.fb.control(false)));

		// Inicializando os checkboxes de tipos de serviço
		this.tiposServico.forEach(() => tiposServicoControl.push(this.fb.control(false)));

		this.diasDaSemana.forEach(() => diasSemanacontrol.push(this.fb.control(false)));

		this.temposReserva.forEach(() => tempoReservacontrol.push(this.fb.control(false)));

		this.horarioInicio.forEach(() => horarioIniciocontrol.push(this.fb.control(false)));

		this.horarioFim.forEach(() => horarioFimcontrol.push(this.fb.control(false)));
	}

	onCheckboxChangeAtividade(index: number, event: any): void {
		const control = <FormArray>this.form.get('atividades');
		control.at(index).setValue(event.target.checked);
	}

	onCheckboxChangeTipoServico(index: number, event: any): void {
		const control = <FormArray>this.form.get('tiposServico');
		control.at(index).setValue(event.target.checked);
	}

	onCheckBoxChangeDiaSemana(index: number, event: any): void {
		const control = <FormArray>this.form.get('diasDaSemana');
		control.at(index).setValue(event.target.checked);
	};

	onCheckBoxChangeTemposReserva(index: number, event: any): void {
		const control = <FormArray>this.form.get('temposReserva');
		control.at(index).setValue(event.target.checked);
	};

	onCheckboxChangeHorarioInicio(index: number, event: any): void {
		const control = <FormArray>this.form.get('horarioInicio');
		control.at(index).setValue(event.target.checked);
	}
	onCheckboxChangeHorarioFim(index: number, event: any): void {
		const control = <FormArray>this.form.get('horarioFim');
		control.at(index).setValue(event.target.checked);
	}

	form: FormGroup;

	selecionarTipoServico(event: any, index: number) {
		const tiposServicoControl = <FormArray>this.form.get('tiposServico');
		if (event.target.checked) {
			tiposServicoControl.controls.forEach((control, i) => {
				if (i !== index) {
					control.setValue(false);
				}
			});
		}

	}

	selecionarTempoReserva(event: any, index: number) {
		const temposReservaControl = <FormArray>this.form.get('temposReserva');
		if (event.target.checked) {
			temposReservaControl.controls.forEach((control, i) => {
				if (i !== index) {
					control.setValue(false);
				}
			});
		}
	}

	selecionarHorarioInicio(event: any, index: number) {
		const selecionarHorarioInicioControl = <FormArray>this.form.get('horarioInicio');
		if (event.target.checked) {
			selecionarHorarioInicioControl.controls.forEach((control, i) => {
				if (i !== index) {
					control.setValue(false);
				}
			});
		}
	}

	selecionarHorarioFim(event: any, index: number) {
		const selecionarHorarioFimControl = <FormArray>this.form.get('horarioFim');
		if (event.target.checked) {
			selecionarHorarioFimControl.controls.forEach((control, i) => {
				if (i !== index) {
					control.setValue(false);
				}
			});
		}
	}
}





