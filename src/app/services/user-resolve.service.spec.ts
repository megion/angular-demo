import { TestBed } from '@angular/core/testing';

import { UserResolveService } from './user-resolve.service';

describe('UserResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserResolveService = TestBed.get(UserResolveService);
    expect(service).toBeTruthy();
  });
});
