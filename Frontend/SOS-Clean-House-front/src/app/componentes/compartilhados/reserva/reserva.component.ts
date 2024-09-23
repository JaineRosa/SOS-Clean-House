import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EnderecoServico } from '../../interface/EnderecoServico';
import { Cliente } from '../../interface/Cliente';
import { Servico } from '../../interface/Servico';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { AtividadesDesenvolvidas } from '../../interface/AtividadesDesenvolvidas';
import { Prestador } from '../../interface/Prestador';
import { ContaPrestador } from '../../interface/ContaPrestador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {
  

  ngOnInit(): void {
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

   constructor(private fb: FormBuilder, private router: Router) {
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

  prestador: Prestador = {
    id: 0,
    tempoExperiencia: 0,
    antecedentesCriminais: new Uint8Array(),
    foto: new Uint8Array(),
    documentos: new Uint8Array(),
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
    fotoPerfil: new Blob(),
    sobreMim: ''
  };

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
  atividades: string[] = [
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

  pagar(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/pagar']); // Remove the array wrapper
  }
}