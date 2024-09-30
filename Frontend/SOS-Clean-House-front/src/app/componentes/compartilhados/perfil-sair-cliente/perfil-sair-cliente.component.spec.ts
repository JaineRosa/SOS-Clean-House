import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilSairClienteComponent } from './perfil-sair-cliente.component';

describe('PerfilSairClienteComponent', () => {
  let component: PerfilSairClienteComponent;
  let fixture: ComponentFixture<PerfilSairClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilSairClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilSairClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
