import { TestBed } from '@angular/core/testing';

import { ContaPrestadorService } from './conta-prestador.service';

describe('ContaPrestadorService', () => {
  let service: ContaPrestadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContaPrestadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
