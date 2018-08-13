import { TestBed, inject } from '@angular/core/testing';

import { HttpClientExtService } from './http-client.service';

describe('HttpClientExtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientExtService]
    });
  });

  it('should be created', inject([HttpClientExtService], (service: HttpClientExtService) => {
    expect(service).toBeTruthy();
  }));
});
