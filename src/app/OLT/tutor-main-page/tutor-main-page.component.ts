import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tutor-main-page',
  templateUrl: './tutor-main-page.component.html',
  styleUrls: ['./tutor-main-page.component.css']
})
export class TutorMainPageComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  navigateToProfile(){
    this.router.navigate(["/tutor/profile"]);
  }

}
