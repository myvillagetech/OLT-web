import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentCourseRoutingModule } from './student-course-routing.module';
import { StudentCourseComponent } from './student-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [
    StudentCourseComponent
  ],
  imports: [
    CommonModule,
    StudentCourseRoutingModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
  ]
})
export class StudentCourseModule { }
