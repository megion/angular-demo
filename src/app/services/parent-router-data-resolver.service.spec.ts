import { TestBed } from '@angular/core/testing';

import { ParentRouterDataResolverService } from './parent-router-data-resolver.service';

describe('ParentRouterDataResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentRouterDataResolverService = TestBed.get(
      ParentRouterDataResolverService,
    );
    expect(service).toBeTruthy();
  });
});
