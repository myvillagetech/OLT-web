import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorSchedulesRoutingModule } from './tutor-schedules-routing.module';
import { TutorSchedulesComponent } from './tutor-schedules.component';


@NgModule({
  declarations: [
    TutorSchedulesComponent
  ],
  imports: [
    CommonModule,
    TutorSchedulesRoutingModule
  ]
})
export class TutorSchedulesModule { }
