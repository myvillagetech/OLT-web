import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorMainPageRoutingModule } from './tutor-main-page-routing.module';
import { TutorMainPageComponent } from './tutor-main-page.component';


@NgModule({
  declarations: [
    TutorMainPageComponent
  ],
  imports: [
    CommonModule,
    TutorMainPageRoutingModule
  ]
})
export class TutorMainPageModule { }
