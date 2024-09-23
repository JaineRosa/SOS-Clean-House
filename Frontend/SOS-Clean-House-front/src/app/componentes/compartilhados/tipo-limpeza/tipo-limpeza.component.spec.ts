import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLimpezaComponent } from './tipo-limpeza.component';

describe('TipoLimpezaComponent', () => {
  let component: TipoLimpezaComponent;
  let fixture: ComponentFixture<TipoLimpezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoLimpezaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TipoLimpezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
