import { TestBed } from '@angular/core/testing';

import { AtividadesDesenvolvidasService } from './atividades-desenvolvidas.service';

describe('AtividadesDesenvolvidasService', () => {
  let service: AtividadesDesenvolvidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtividadesDesenvolvidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
