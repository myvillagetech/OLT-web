import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OltMainPageComponent } from './olt-main-page.component';

const routes: Routes = [
  {
    path : '',
    component : OltMainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OltMainPageRoutingModule { }
