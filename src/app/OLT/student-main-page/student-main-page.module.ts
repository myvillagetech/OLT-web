import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentMainPageRoutingModule } from './student-main-page-routing.module';
import { StudentMainPageComponent } from './student-main-page.component';


@NgModule({
  declarations: [
    StudentMainPageComponent
  ],
  imports: [
    CommonModule,
    StudentMainPageRoutingModule
  ]
})
export class StudentMainPageModule { }
