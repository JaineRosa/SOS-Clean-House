import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  
  // Verifica se o usuário logado é um cliente
  isLogadoComoCliente(): boolean {
    return sessionStorage.getItem('userType') === 'cliente';
    console.log(this.isLogadoComoCliente);
    
  }

  // Verifica se o usuário logado é um prestador
  isLogadoComoPrestador(): boolean {
    return sessionStorage.getItem('userType') === 'prestador';
    console.log(this.isLogadoComoPrestador);
  }


}

  // userLoggedIn: boolean = false;
  // userType: string | null = null;
  // if () {

  // }




  // ngOnInit() {
  //   this.checkUserStatus();
  // }

  // checkUserStatus() {
  //   this.userType = sessionStorage.getItem("userType");
  //   console.log("User Type:", this.userType); // Log para verificar o valor
  //   this.userLoggedIn = this.isLogado();
  //   console.log("User Logged In:", this.userLoggedIn); // Log para verificar se está logado
  // }

  // // Verifica se o usuário está logado
  // isLogado(): boolean {
  //   return this.userType === "prestador" || this.userType === "cliente";
  // }

  // // Verifica se o usuário logado é um cliente
  // isCliente(): boolean {
  //   return this.userType === "cliente";
  // }

  // // Verifica se o usuário logado é um prestador
  // isPrestador(): boolean {
  //   return this.userType === "prestador";
  // }




