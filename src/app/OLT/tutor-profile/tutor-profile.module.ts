import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorProfileRoutingModule } from './tutor-profile-routing.module';
import { TutorProfileComponent } from './tutor-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TutorProfileComponent
  ],
  imports: [
    CommonModule,
    TutorProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TutorProfileModule { }
