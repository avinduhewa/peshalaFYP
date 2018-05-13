import { TestBed, inject } from '@angular/core/testing';

import { MakeClassGetCallsService } from './make-class-get-calls.service';

describe('MakeClassGetCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakeClassGetCallsService]
    });
  });

  it('should be created', inject([MakeClassGetCallsService], (service: MakeClassGetCallsService) => {
    expect(service).toBeTruthy();
  }));
});
