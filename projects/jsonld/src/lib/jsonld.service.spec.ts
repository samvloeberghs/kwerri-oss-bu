import { TestBed } from '@angular/core/testing';

import { JsonLdService } from './jsonld.service';

describe('JsonldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonLdService = TestBed.get(JsonLdService);
    expect(service).toBeTruthy();
  });
});
