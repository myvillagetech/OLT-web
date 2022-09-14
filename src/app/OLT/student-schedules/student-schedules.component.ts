import { Component, OnInit } from '@angular/core';
import { StudentSchedulesService } from './student-schedules.service';

@Component({
  selector: 'app-student-schedules',
  templateUrl: './student-schedules.component.html',
  styleUrls: ['./student-schedules.component.css']
})
export class StudentSchedulesComponent implements OnInit {
  studentId : string = localStorage.getItem('userId') || '';
  schedules : any = [];
  constructor(
    private studentSchedulesService :StudentSchedulesService
  ) { }

  ngOnInit(): void {
    this.getAllSchedules();
  }

  getAllSchedules(){
    this.studentSchedulesService.getAllSchedules(this.studentId).subscribe((res)=>{
      console.log(res);
      this.schedules = res.schedule
    })
  }

}
