import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorProfileComponent } from './tutor-profile.component';

const routes: Routes = [
  {
    path : '',
    component : TutorProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorProfileRoutingModule { }
