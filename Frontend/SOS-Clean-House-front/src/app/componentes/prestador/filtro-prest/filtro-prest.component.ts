import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro-prest',
  templateUrl: './filtro-prest.component.html',
  styleUrl: './filtro-prest.component.scss'
})
export class FiltroPrestComponent {
  

  constructor(private router: Router) {}

  ngOnInit(){
    sessionStorage.setItem("user","jaine")
  }
  ngOnDestroy(){
    sessionStorage.removeItem("user");
  }

  hoje(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/hoje-prest']);
  }

  calendario(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/calendario-prest']);
  }

  anuncio(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/anuncio']);
  }

  ganhos(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.router.navigate(['/ganhos-prest']);
  }
}
