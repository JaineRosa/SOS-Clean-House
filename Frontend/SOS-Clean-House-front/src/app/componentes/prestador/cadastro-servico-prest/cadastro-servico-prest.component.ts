import { Component, OnInit } from '@angular/core';
import { DataService, Person } from '../data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cadastro-servico-prest',
  templateUrl: './cadastro-servico-prest.component.html',
  styleUrl: './cadastro-servico-prest.component.scss'
})
export class CadastroServicoPrestComponent  implements OnInit {
	people: Person[] = [];
	selectedPeople = [];

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.dataService
			.getPeople()
			.pipe(map((x) => x.filter((y) => !y.disabled)))
			.subscribe((res) => {
				this.people = res;
				this.selectedPeople = [this.people[0].id, this.people[1].id];
			});
	}
}