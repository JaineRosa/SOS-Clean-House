import { Component } from '@angular/core';
import { Cliente } from './componentes/interface/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SOS-Clean-House-front';

  constructor(private router: Router) { }

  isPrestador(): boolean {
    const userType = sessionStorage.getItem("userType");
    const currentRoute = this.router.url;
    return userType === "prestador" && currentRoute !== '/perfil-prest';
  }

  isCliente(): boolean {
    const userType = sessionStorage.getItem("userType");
    const currentRoute = this.router.url;
    return userType !== "prestador" && currentRoute !== '/perfil-cliente';
  }

  ngOnInit(): void {
    const usuario = sessionStorage.getItem("user")
    if (usuario) {
      console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAA")
      console.log(usuario);
      

    } else {
      console.log("NAOOOOOOOOOOOOOOOOOOOOO")
    }
  }


}
