import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroServicoPrestComponent } from './cadastro-servico-prest.component';

describe('CadastroServicoPrestComponent', () => {
  let component: CadastroServicoPrestComponent;
  let fixture: ComponentFixture<CadastroServicoPrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroServicoPrestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroServicoPrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
