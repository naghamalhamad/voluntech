import { TestBed } from '@angular/core/testing';

import { VolunteerprofileService } from './volunteerprofile.service';

describe('VolunteerprofileService', () => {
  let service: VolunteerprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteerprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
