import { Component, OnInit } from '@angular/core';
import { TutorCourseService } from './tutor-course.service';

@Component({
  selector: 'app-tutor-course',
  templateUrl: './tutor-course.component.html',
  styleUrls: ['./tutor-course.component.css']
})
export class TutorCourseComponent implements OnInit {

  isAddNewCourse : boolean = false;
  courseName = '';
  courseDiscription = '';
  courses : any = []
  constructor(
    private tutorCourseService  : TutorCourseService
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
  }

  addNewCourse(){
    this.isAddNewCourse = true;
  }
  close(){
    this.isAddNewCourse = false;
  }

  getAllCourses(){
    this.tutorCourseService.getAllCourses().subscribe((res)=>{
      console.log(res);
      this.courses = res.data;
    },(error)=>{
      console.log(error);
    })
  }



}
