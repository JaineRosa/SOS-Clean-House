import { TestBed } from '@angular/core/testing';

import { ClienteCartaoService } from './cliente-cartao.service';

describe('ClienteCartaoService', () => {
  let service: ClienteCartaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteCartaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
