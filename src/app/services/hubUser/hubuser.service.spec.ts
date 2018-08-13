import { TestBed, inject } from '@angular/core/testing';

import { HubUserService } from './hubuser.service';

describe('HubuserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HubUserService]
    });
  });

  it('should be created', inject([HubUserService], (service: HubUserService) => {
    expect(service).toBeTruthy();
  }));
});
