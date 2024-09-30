import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { DiaCalendario } from '../../interface/DiaCalendario';
import { DiaCalendarioService } from '../../servicos/dia-calendario.service';
import { response } from 'express';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent {

  @Output() getData: EventEmitter<Date> = new EventEmitter;

  selectedDate: { year: number; month: number; day: number } | null = null;

  constructor(private diaCalendarioService: DiaCalendarioService) {}

  onDateSelect(event: any): void {
    this.selectedDate = event;
    const data: Date = new Date(`${this.selectedDate?.year}-${this.selectedDate?.month}-${this.selectedDate?.day}`);
    this.getData.emit(data);
  }

  toDate(): Date | null {
    if (this.selectedDate) {
      const { year, month, day } = this.selectedDate;
      return new Date(year, month - 1, day);
    }
    return null;
  }

  isSelected(date: { year: number; month: number; day: number }): boolean {
    return !!(this.selectedDate && 
      date.year === this.selectedDate.year && 
      date.month === this.selectedDate.month && 
      date.day === this.selectedDate.day);
  }

  

}
