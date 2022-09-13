import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OltHomePageComponent } from './olt-home-page.component';

describe('OltHomePageComponent', () => {
  let component: OltHomePageComponent;
  let fixture: ComponentFixture<OltHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OltHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OltHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
