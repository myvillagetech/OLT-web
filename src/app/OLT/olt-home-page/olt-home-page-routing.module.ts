import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OltHomePageComponent } from './olt-home-page.component';

const routes: Routes = [
  {
		path : '',
		component :OltHomePageComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OltHomePageRoutingModule { }
