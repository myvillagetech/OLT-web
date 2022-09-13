import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorMainPageComponent } from './tutor-main-page.component';

const routes: Routes = [
  {
    path : '',
    component : TutorMainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorMainPageRoutingModule { }
