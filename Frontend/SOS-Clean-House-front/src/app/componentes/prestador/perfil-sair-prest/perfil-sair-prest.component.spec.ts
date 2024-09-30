import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSairPrestComponent } from './perfil-sair-prest.component';

describe('PerfilSairPrestComponent', () => {
  let component: PerfilSairPrestComponent;
  let fixture: ComponentFixture<PerfilSairPrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilSairPrestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilSairPrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
