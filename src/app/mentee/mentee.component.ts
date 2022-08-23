import { Component, OnInit } from '@angular/core';
import { Event, NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-mentee',
  templateUrl: './mentee.component.html',
  styleUrls: ['./mentee.component.css'],
})
export class MenteeComponent implements OnInit {
  splitVal:any;
  base:any;
  page:any;
  patientSidebar: boolean = true;
  constructor(
    private router: Router,
    public commonService: CommonServiceService,
    location: Location
  ) {}

  ngOnInit(): void {}
}
