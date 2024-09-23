import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPrestComponent } from './perfil-prest.component';

describe('PerfilPrestComponent', () => {
  let component: PerfilPrestComponent;
  let fixture: ComponentFixture<PerfilPrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilPrestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilPrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
