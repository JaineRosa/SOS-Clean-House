import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPrestComponent } from './cadastro-prest.component';

describe('CadastroPrestComponent', () => {
  let component: CadastroPrestComponent;
  let fixture: ComponentFixture<CadastroPrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroPrestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroPrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
