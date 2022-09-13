import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorMainPageComponent } from './tutor-main-page.component';

describe('TutorMainPageComponent', () => {
  let component: TutorMainPageComponent;
  let fixture: ComponentFixture<TutorMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
