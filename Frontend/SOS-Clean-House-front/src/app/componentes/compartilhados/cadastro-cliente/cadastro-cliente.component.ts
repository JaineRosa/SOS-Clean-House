import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { Cliente } from '../../interface/Cliente';
import { Usuario } from '../../interface/Usuario';
import { ClienteService } from '../../servicos/cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrl: './cadastro-cliente.component.scss'
})
export class CadastroClienteComponent implements OnInit {
  
  selectedFile!: File;
  profileImage: any;

  constructor (private clienteService: ClienteService, private router: Router) { };

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.cliente.fotoPerfil = event.target.files[0];
  }

  uploadImage() {
    this.clienteService.uploadProfileImage(this.cliente.id, this.selectedFile).subscribe(
      response => {
        this.getProfileImage(this.cliente.id);
      },
      error => console.error(error)
    );
  }

  private getProfileImage(id: number){
    this.clienteService.getProfileImage(id).subscribe(
      (image: Blob) => {
        const urlCreator = window.URL || window.webkitURL;
        this.profileImage = urlCreator.createObjectURL(image);
      },
      error => console.error(error)
    );
  }

  saveCliente() {
    this.clienteService.create(this.cliente).subscribe((response) => {
      console.log(response);
      this.router.navigate(["/tela-inicial"]);
    }, (error) => {
      console.error(error);
      // show error message
    });
  }


  cliente: Cliente = {
    id: 0,
    nomeCompleto: '',
    endereco: '',
    telefone: '',
    dataNascimento: new Date(),
    cpf: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    fotoPerfil: null,
    chats: [],
    sexo: '',
    clienteCartoes: [],
    usuario: {} as Usuario,
    id_usuario: 1
  }

  ngOnInit(): void {
    // Referencie o botão e adicione o listener ao evento de clique
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
}

  