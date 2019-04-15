import { TestBed, inject } from '@angular/core/testing';

import { BaseCommService } from './base-comm.service';

describe('BaseCommService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseCommService]
    });
  });

  it('should be created', inject([BaseCommService], (service: BaseCommService) => {
    expect(service).toBeTruthy();
  }));
});
