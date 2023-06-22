import { TestBed } from '@angular/core/testing';

import { OptionalservService } from './optionalserv.service';

describe('OptionalservService', () => {
  let service: OptionalservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionalservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
