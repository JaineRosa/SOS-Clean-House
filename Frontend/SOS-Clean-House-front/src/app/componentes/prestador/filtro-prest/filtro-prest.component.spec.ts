import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPrestComponent } from './filtro-prest.component';

describe('FiltroPrestComponent', () => {
  let component: FiltroPrestComponent;
  let fixture: ComponentFixture<FiltroPrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltroPrestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltroPrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
