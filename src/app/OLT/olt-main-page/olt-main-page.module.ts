import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OltMainPageRoutingModule } from './olt-main-page-routing.module';
import { OltMainPageComponent } from './olt-main-page.component';


@NgModule({
  declarations: [
    OltMainPageComponent
  ],
  imports: [
    CommonModule,
    OltMainPageRoutingModule
  ]
})
export class OltMainPageModule { }
