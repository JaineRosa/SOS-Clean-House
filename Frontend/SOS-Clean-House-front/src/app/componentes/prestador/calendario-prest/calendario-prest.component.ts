import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario-prest',
  templateUrl: './calendario-prest.component.html',
  styleUrl: './calendario-prest.component.scss'
})
export class CalendarioPrestComponent {

  selectedDate: { year: number; month: number; day: number } | null = null;

  onDateSelect(event: any): void {
    this.selectedDate = event;
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
