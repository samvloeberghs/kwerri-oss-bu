import { TestBed } from '@angular/core/testing';

import { JsonldService } from './jsonld.service';

describe('JsonldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonldService = TestBed.get(JsonldService);
    expect(service).toBeTruthy();
  });
});
