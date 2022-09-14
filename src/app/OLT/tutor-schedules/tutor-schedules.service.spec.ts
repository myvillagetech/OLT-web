import { TestBed } from '@angular/core/testing';

import { TutorSchedulesService } from './tutor-schedules.service';

describe('TutorSchedulesService', () => {
  let service: TutorSchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorSchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
