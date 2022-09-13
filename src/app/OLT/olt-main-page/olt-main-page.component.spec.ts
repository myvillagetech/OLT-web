import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OltMainPageComponent } from './olt-main-page.component';

describe('OltMainPageComponent', () => {
  let component: OltMainPageComponent;
  let fixture: ComponentFixture<OltMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OltMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OltMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
