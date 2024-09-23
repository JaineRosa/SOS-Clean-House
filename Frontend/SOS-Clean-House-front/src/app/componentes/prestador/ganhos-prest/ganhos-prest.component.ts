import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCalendar, NgbDate, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ganhos-prest',
  templateUrl: './ganhos-prest.component.html',
  styleUrl: './ganhos-prest.component.scss'
})
export class GanhosPrestComponent {

  constructor(private router: Router) {}

  mesSelecionado: string = '';
  anoSelecionado: string = '';

  // Lista de meses
  meses = [
    { nome: 'Janeiro', valor: '01' },
    { nome: 'Fevereiro', valor: '02' },
    { nome: 'Março', valor: '03' },
    { nome: 'Abril', valor: '04' },
    { nome: 'Maio', valor: '05' },
    { nome: 'Junho', valor: '06' },
    { nome: 'Julho', valor: '07' },
    { nome: 'Agosto', valor: '08' },
    { nome: 'Setembro', valor: '09' },
    { nome: 'Outubro', valor: '10' },
    { nome: 'Novembro', valor: '11' },
    { nome: 'Dezembro', valor: '12' }
  ];

  // Lista de anos (pode ser gerada dinamicamente se necessário)
  anos = this.gerarAnos(2015, 2025); // Anos entre 2015 e 2024

  // Gera uma lista de anos com base no intervalo fornecido
  gerarAnos(inicio: number, fim: number): number[] {
    const anos = [];
    for (let i = inicio; i <= fim; i++) {
      anos.push(i);
    }
    return anos;
  }

  pesquisarPorMesAno() {
    if (this.mesSelecionado && this.anoSelecionado) {
      console.log(`Mês selecionado: ${this.mesSelecionado}, Ano selecionado: ${this.anoSelecionado}`);
      // Aqui você pode implementar a lógica de pesquisa para o mês e ano
    } else {
      console.log('Por favor, selecione tanto o mês quanto o ano.');
    }
  }
 
  





  calendar = inject(NgbCalendar);
	formatter = inject(NgbDateParserFormatter);

	hoveredDate: NgbDate | null = null;
	fromDate: NgbDate | null = this.calendar.getToday();
	toDate: NgbDate | null = this.calendar.getNext(this.calendar.getToday(), 'd', 10);

	onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}

	validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
		const parsed = this.formatter.parse(input);
		return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
	}
}

