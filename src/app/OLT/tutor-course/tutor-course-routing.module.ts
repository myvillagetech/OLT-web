import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorCourseComponent } from './tutor-course.component';

const routes: Routes = [
  {
    path : '',
    component : TutorCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorCourseRoutingModule { }
