import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrl: './perfil-cliente.component.scss'
})
export class PerfilClienteComponent  implements OnInit{
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