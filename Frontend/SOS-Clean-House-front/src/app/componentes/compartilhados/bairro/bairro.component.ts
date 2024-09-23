import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-bairro',
  templateUrl: './bairro.component.html',
  styleUrl: './bairro.component.scss'
})
export class BairroComponent implements OnInit {

  @Output() selectedOptions = new EventEmitter<string[]>();

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.initializeCheckboxes();
  }

  private initializeCheckboxes(): void {
    // Inicialmente não precisa adicionar eventos individuais aos checkboxes.
  }

  private getSelectedOptions(): string[] {
    const selectedOptions: string[] = [];
    const checkedBoxes = this.elRef.nativeElement.querySelectorAll('.select-items div input:checked');

    checkedBoxes.forEach((checkedBox: HTMLInputElement) => {
      selectedOptions.push(checkedBox.value);
    });

    return selectedOptions;
  }

  applySelections(): void {
    const selectedOptions = this.getSelectedOptions();
    this.selectedOptions.emit(selectedOptions);
  }
}