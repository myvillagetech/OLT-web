import { Component, OnInit } from '@angular/core';
import { TutorSchedulesService } from './tutor-schedules.service';

@Component({
  selector: 'app-tutor-schedules',
  templateUrl: './tutor-schedules.component.html',
  styleUrls: ['./tutor-schedules.component.css']
})
export class TutorSchedulesComponent implements OnInit {

  tutorId : string = localStorage.getItem('userId') || '';
  schedules : any = [];
  constructor(
    private tutorSchedulesService: TutorSchedulesService
  ) { }

  ngOnInit(): void {
    this.getAllSchedules();
  }

  getAllSchedules(){
    this.tutorSchedulesService.getAllSchedules(this.tutorId).subscribe((res)=>{
      console.log(res);
      this.schedules = res.schedule
    })
  }

}
