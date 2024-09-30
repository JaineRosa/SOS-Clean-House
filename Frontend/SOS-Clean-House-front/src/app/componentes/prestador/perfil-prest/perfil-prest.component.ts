import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap'
import { Prestador } from '../../interface/Prestador';
import { ContaPrestador } from '../../interface/ContaPrestador';
import { PrestadorService } from '../../servicos/prestador.service';
import { ContaPrestadorService } from '../../servicos/conta-prestador.service';
import { response } from 'express';
@Component({
  selector: 'app-perfil-prest',
  templateUrl: './perfil-prest.component.html',
  styleUrl: './perfil-prest.component.scss'
})
export class PerfilPrestComponent implements OnInit {

  isEdicao: boolean = false;

  constructor(private prestadorService: PrestadorService, private contaBancariaService: ContaPrestadorService) { }

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
    sobreMim: '',
    id_usuario: 0
  }
  contaBancaria: ContaPrestador = {
    id: 0,
    nomeTitular: '',
    agencia: '',
    conta: '',
    cnpj: '',
    cpf: '',
    prestador: {} as Prestador
  }


  ngOnInit(): void {

    const prestadorId = sessionStorage.getItem('prestador-id');


    if (prestadorId) {
      // Chamar o serviço para buscar o prestador pelo ID
      this.prestadorService.findById(+prestadorId).subscribe(
        (retorno: Prestador) => {
          this.prestador = retorno;

          this.contaBancariaService.findByPrestadorId(this.prestador.id).subscribe((contaBancaria) => {
            this.contaBancaria = contaBancaria
          });

        },
        (error) => {
          console.error('Erro ao buscar prestador:', error);
        }
      );
    } else {
      console.error("Prestador ID não encontrado no sessionStorage");
      return;
    }

  }
  enableEditing() {
    this.isEdicao = true;
  }

  salvar() {

    this.prestadorService.update(this.prestador).subscribe(
      (prestadorAtualizado) => {
        console.log('Perfil atualizado com sucesso');
        console.log(this.prestador);

        this.salvarConta(prestadorAtualizado);

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

  salvarConta(prestador: Prestador) {

    this.contaBancaria.prestador = prestador;

    if (this.contaBancaria.id && this.contaBancaria.id != 0) {
      this.contaBancariaService.update(this.contaBancaria).subscribe((resposta) => {
        console.log(resposta);
      }, (error) => {
        console.error('Erro ao atualizar perfil', error);
      });
    } else {
      this.contaBancariaService.create(this.contaBancaria).subscribe((resposta) => {
        console.log(resposta);
      }, (error) => {
        console.error('Erro ao salvar perfil', error);
      });
    }
  }

}  