import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorSchedulesComponent } from './tutor-schedules.component';

const routes: Routes = [
  {
    path : '',
    component : TutorSchedulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorSchedulesRoutingModule { }
