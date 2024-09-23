import { Component } from '@angular/core';
import { Modal } from 'bootstrap';
import * as bootstrap from 'bootstrap'

@Component({
  selector: 'app-cartao-credito',
  templateUrl: './cartao-credito.component.html',
  styleUrl: './cartao-credito.component.scss'
})
export class CartaoCreditoComponent {
  
  numeroCartao: string = '';
  nomeCompleto: string = '';
  dataValidade: string = '';
  cvv: string = '';
  cpf: string = '';

  registerCreditCard(): void {
    // Aqui você pode implementar a lógica para processar os dados do cartão.
    if (this.numeroCartao && this.nomeCompleto && this.dataValidade && this.cvv && this.cpf) {
      console.log('Número do Cartão:', this.numeroCartao);
      console.log('Nome Completo:', this.nomeCompleto);
      console.log('Data de Validade:', this.dataValidade);
      console.log('CVV:', this.cvv);
      console.log('CPF do Titular:', this.cpf);

      // Fechar o modal programaticamente (opcional, se necessário)
      const modalElement = document.getElementById('creditCardModal');
      if (modalElement) {
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
        }
      }

      // Resetar o formulário após o cadastro
      this.resetForm();
    } else {
      console.log('Por favor, preencha todos os campos.');
    }
  }

  resetForm(): void {
    this.numeroCartao = '';
    this.nomeCompleto = '';
    this.dataValidade = '';
    this.cvv = '';
    this.cpf = '';
  }
}