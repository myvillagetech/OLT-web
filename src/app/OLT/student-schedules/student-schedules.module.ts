import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentSchedulesRoutingModule } from './student-schedules-routing.module';
import { StudentSchedulesComponent } from './student-schedules.component';


@NgModule({
  declarations: [
    StudentSchedulesComponent
  ],
  imports: [
    CommonModule,
    StudentSchedulesRoutingModule
  ]
})
export class StudentSchedulesModule { }
