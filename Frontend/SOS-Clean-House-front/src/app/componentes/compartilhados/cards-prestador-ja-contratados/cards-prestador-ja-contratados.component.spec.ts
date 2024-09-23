import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsPrestadorJaContratadosComponent } from './cards-prestador-ja-contratados.component';

describe('CardsPrestadorJaContratadosComponent', () => {
  let component: CardsPrestadorJaContratadosComponent;
  let fixture: ComponentFixture<CardsPrestadorJaContratadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsPrestadorJaContratadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsPrestadorJaContratadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
