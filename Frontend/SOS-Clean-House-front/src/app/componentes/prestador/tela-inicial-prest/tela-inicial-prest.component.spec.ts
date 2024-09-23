import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaInicialPrestComponent } from './tela-inicial-prest.component';

describe('TelaInicialPrestComponent', () => {
  let component: TelaInicialPrestComponent;
  let fixture: ComponentFixture<TelaInicialPrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaInicialPrestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaInicialPrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
