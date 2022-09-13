import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OltHomePageRoutingModule } from './olt-home-page-routing.module';
import { OltHomePageComponent } from './olt-home-page.component';


@NgModule({
  declarations: [OltHomePageComponent],
  imports: [
    CommonModule,
    OltHomePageRoutingModule,
    
  ]
})
export class OltHomePageModule { }
