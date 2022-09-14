import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorProfileRoutingModule } from './tutor-profile-routing.module';
import { TutorProfileComponent } from './tutor-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';


@NgModule({
  declarations: [
    TutorProfileComponent
  ],
  imports: [
    CommonModule,
    TutorProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
  ]
})
export class TutorProfileModule { }
