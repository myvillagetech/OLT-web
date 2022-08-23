import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, NavigationStart, Router } from '@angular/router';

import { CommonServiceService } from './../../common-service.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  name:any;
  base:any;
  page:any;
  splitVal:any;
  constructor(
    private router: Router,
    public commonService: CommonServiceService
  ) {}

  ngOnInit(): void {
    this.splitVal = this.router.url.split('/');
    this.base = this.splitVal[1];
    this.page = this.splitVal[2];
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.splitVal = event.url.split('/');
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
      }
    });

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
      $("html").removeClass("menu-opened");
      $(".sidebar-overlay").removeClass("opened");
      $(".main-wrapper").removeClass("slide-nav");
      }
      });
  }

  logout() {
    localStorage.clear();
    this.commonService.nextmessage('logout');
    this.router.navigate(['/login-page']);
  }

  navigate(name:any) {
    this.name = name;
    this.commonService.nextmessage(name);
  }
}
