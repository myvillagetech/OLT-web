import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonServiceService } from '../../common-service.service';
import * as $ from 'jquery';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-mentee',
  templateUrl: './mentee.component.html',
  styleUrls: ['./mentee.component.css'],
})
export class MenteeComponent implements OnInit {
  patientsList: any = [];
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
    this.getMentees();
  }

  getMentees() {
    this.commonService.getpatients().subscribe(
      (res) => {
        this.patientsList = res;
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
