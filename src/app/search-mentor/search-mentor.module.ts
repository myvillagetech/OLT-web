import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchMentorRoutingModule } from './search-mentor-routing.module';
import { SearchMentorComponent } from './search-mentor.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ng2-tooltip-directive';

@NgModule({
  declarations: [SearchMentorComponent],
  imports: [CommonModule, SearchMentorRoutingModule, NgbModule, TooltipModule],
})
export class SearchMentorModule {}
