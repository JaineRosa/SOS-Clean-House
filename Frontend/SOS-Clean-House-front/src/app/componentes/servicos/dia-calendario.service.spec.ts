import { TestBed } from '@angular/core/testing';

import { DiaCalendarioService } from './dia-calendario.service';

describe('DiaCalendarioService', () => {
  let service: DiaCalendarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiaCalendarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
