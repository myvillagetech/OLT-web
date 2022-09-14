import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorCourseRoutingModule } from './tutor-course-routing.module';
import { TutorCourseComponent } from './tutor-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TutorCourseComponent
  ],
  imports: [
    CommonModule,
    TutorCourseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class TutorCourseModule { }
