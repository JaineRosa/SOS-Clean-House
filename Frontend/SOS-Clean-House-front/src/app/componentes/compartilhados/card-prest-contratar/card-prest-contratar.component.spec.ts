import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPrestContratarComponent } from './card-prest-contratar.component';

describe('CardPrestContratarComponent', () => {
  let component: CardPrestContratarComponent;
  let fixture: ComponentFixture<CardPrestContratarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPrestContratarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPrestContratarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
