import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservandoComponent } from './reservando.component';

describe('ReservandoComponent', () => {
  let component: ReservandoComponent;
  let fixture: ComponentFixture<ReservandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservandoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
