import { TestBed } from '@angular/core/testing';

import { SeoSocialShareService } from './seo-social-share.service';

describe('SeoSocialShareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeoSocialShareService = TestBed.get(SeoSocialShareService);
    expect(service).toBeTruthy();
  });
});
