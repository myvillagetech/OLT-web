import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { StudentCourseService } from './student-course.service';

@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.css']
})
export class StudentCourseComponent implements OnInit {

  courses =[];
  selectedCourse : any;
  availableTutorProfiles : any = [];
  selectedSlots:any = [];

  constructor(
    private studentCourseService:StudentCourseService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(){
    this.studentCourseService.getAllCourses().subscribe((res)=>{
      console.log(res);
      this.courses = res.data;
    })
  }

  dropdownChange(event:any){
    console.log("dbcksjdnjm",event,this.selectedCourse);
    this.availableTutorProfiles = [];
    this.studentCourseService.getProfilesByCourseName(event.value.courseName).subscribe((res)=>{
      console.log(res);
      this.availableTutorProfiles = res.data;
    })
  }

  bookAppointment(tutor:any){
    console.log(tutor,this.selectedSlots);
    let payload = {
      studentId : localStorage.getItem('userId'),
      tutorId : tutor.userId,
      subjects : this.selectedCourse,
      start : this.selectedSlots,
      end : this.selectedSlots
    }
    console.log(payload);
    this.studentCourseService.createSchedule(payload).subscribe((res)=>{
      console.log(res);
      this.toastr.success("Appointment Booked Successfully");
    })
  }

  

}
