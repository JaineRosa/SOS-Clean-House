import { TestBed } from '@angular/core/testing';

import { EnderecoServicoService } from './endereco-servico.service';

describe('EnderecoServicoService', () => {
  let service: EnderecoServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnderecoServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
