import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPesquisarComponent } from './card-pesquisar.component';

describe('CardPesquisarComponent', () => {
  let component: CardPesquisarComponent;
  let fixture: ComponentFixture<CardPesquisarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPesquisarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
