import { TestBed, inject } from '@angular/core/testing';

import { MakeClassPostCallsService } from './make-class-post-calls.service';

describe('MakeClassPostCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MakeClassPostCallsService]
    });
  });

  it('should be created', inject([MakeClassPostCallsService], (service: MakeClassPostCallsService) => {
    expect(service).toBeTruthy();
  }));
});
