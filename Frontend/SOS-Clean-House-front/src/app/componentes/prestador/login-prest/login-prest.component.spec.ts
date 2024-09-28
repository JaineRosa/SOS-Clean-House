import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPrestComponent } from './login-prest.component';

describe('LoginPrestComponent', () => {
  let component: LoginPrestComponent;
  let fixture: ComponentFixture<LoginPrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPrestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
