import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoReservaComponent } from './resumo-reserva.component';

describe('ResumoReservaComponent', () => {
  let component: ResumoReservaComponent;
  let fixture: ComponentFixture<ResumoReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumoReservaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumoReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
