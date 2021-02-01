import { TestBed } from '@angular/core/testing';

import { InMemoryApisService } from './in-memory-apis.service';

describe('InMemoryApisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryApisService = TestBed.get(InMemoryApisService);
    expect(service).toBeTruthy();
  });
});
