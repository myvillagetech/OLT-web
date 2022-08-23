import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import * as $ from 'jquery';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.css'],
})
export class MentorComponent implements OnInit {
  mentorsList: any = [];
  errorMessage!: string;

  @ViewChild(DataTableDirective)
  public dtElement!: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  constructor(public commonService: CommonServiceService) {}

  ngOnInit(): void {
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: 'lrtip',
    };
    this.getMentors();
  }

  getMentors() {
    this.commonService.getMentors().subscribe(
      (res) => {
        this.mentorsList = res;
        this.dtTrigger.next(this.dtOptions);
      },
      (error) => (this.errorMessage = <any>error)
    );
  }
    // destroy data table when leaving
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }
}

