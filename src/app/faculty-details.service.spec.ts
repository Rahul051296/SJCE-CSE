import { TestBed, inject } from '@angular/core/testing';

import { FacultyDetailsService } from './faculty-details.service';

describe('FacultyDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FacultyDetailsService]
    });
  });

  it('should be created', inject([FacultyDetailsService], (service: FacultyDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
