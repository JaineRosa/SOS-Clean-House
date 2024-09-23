import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarioPrestComponent } from './calendario-prest.component';

describe('CalendarioPrestComponent', () => {
  let component: CalendarioPrestComponent;
  let fixture: ComponentFixture<CalendarioPrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarioPrestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarioPrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
