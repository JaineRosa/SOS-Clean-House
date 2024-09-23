import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojePrestComponent } from './hoje-prest.component';

describe('HojePrestComponent', () => {
  let component: HojePrestComponent;
  let fixture: ComponentFixture<HojePrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HojePrestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HojePrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
