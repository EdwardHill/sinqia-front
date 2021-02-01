import { TestBed } from '@angular/core/testing';

import { SetorDoClienteService } from './setor-do-cliente.service';

describe('SetorDoClienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetorDoClienteService = TestBed.get(SetorDoClienteService);
    expect(service).toBeTruthy();
  });
});
