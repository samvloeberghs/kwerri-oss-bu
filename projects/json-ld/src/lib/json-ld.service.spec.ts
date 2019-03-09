import { TestBed } from '@angular/core/testing';

import { JsonLdService } from './json-ld.service';

describe('JsonLdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonLdService = TestBed.get(JsonLdService);
    expect(service).toBeTruthy();
  });
});
