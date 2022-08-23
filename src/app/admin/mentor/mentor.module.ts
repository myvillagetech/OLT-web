import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';

@NgModule({
  declarations: [MentorComponent],
  imports: [CommonModule, MentorRoutingModule, DataTablesModule],
})
export class MentorModule {}
