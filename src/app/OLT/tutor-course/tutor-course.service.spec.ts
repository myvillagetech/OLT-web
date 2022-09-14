import { TestBed } from '@angular/core/testing';

import { TutorCourseService } from './tutor-course.service';

describe('TutorCourseService', () => {
  let service: TutorCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
