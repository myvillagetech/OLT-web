import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-main-page',
  templateUrl: './student-main-page.component.html',
  styleUrls: ['./student-main-page.component.css']
})
export class StudentMainPageComponent implements OnInit {

  constructor(
    private router : Router
  ) { 
  }

  ngOnInit(): void {
  }

  navigateToCourses(){
    this.router.navigate(["/student/course"]);
  }

}
