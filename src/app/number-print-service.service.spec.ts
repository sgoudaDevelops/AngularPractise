import { TestBed } from '@angular/core/testing';

import { NumberPrintServiceService } from './number-print-service.service';

describe('NumberPrintServiceService', () => {
  let service: NumberPrintServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberPrintServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
