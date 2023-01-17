import { TestBed } from '@angular/core/testing';

import { CadastroSenderistasTrirthSteepService } from './cadastro-senderistas-trirth-steep.service';

describe('CadastroSenderistasTrirthSteepService', () => {
  let service: CadastroSenderistasTrirthSteepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroSenderistasTrirthSteepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
