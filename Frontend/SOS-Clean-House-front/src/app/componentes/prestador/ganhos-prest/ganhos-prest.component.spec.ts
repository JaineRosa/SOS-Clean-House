import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanhosPrestComponent } from './ganhos-prest.component';

describe('GanhosPrestComponent', () => {
  let component: GanhosPrestComponent;
  let fixture: ComponentFixture<GanhosPrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GanhosPrestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GanhosPrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
