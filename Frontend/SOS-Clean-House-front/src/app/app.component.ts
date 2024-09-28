import { Component } from '@angular/core';
import { Cliente } from './componentes/interface/Cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SOS-Clean-House-front';
  isVisivel:  boolean = true;

  tipoUsuario: string = 'cliente'; // Por padrão, cliente

  // Esta função pode ser chamada após o login para atualizar o tipo de usuário
  atualizarTipoUsuario(tipo: string) {
    this.tipoUsuario = tipo;
  }

  ngOnInit(): void { 
    const usuario = sessionStorage.getItem("user")
    if(usuario){
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA")
      console.log(usuario);
      this.isVisivel= false
      
    }else{
      console.log("NAOOOOOOOOOOOOOOOOOOOOO")
    }
  }
  // ngOnChange(): void { 
  //   const usuario = sessionStorage.getItem("user")
  //   if(usuario){
  //     console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  //   }else{
  //     console.log("NAOOOOOOOOOOOOOOOOOOOOO")
  //   }
  // }

}
