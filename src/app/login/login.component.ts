import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from '../common-service.service';

import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isPatient: boolean = false;
  // mentors: any = [];
  // mentees: any = [];
  email = '';
  password = '';
  constructor(
    public router: Router,
    public commonService: CommonServiceService,
    private toastr: ToastrService,
    private loginService: LoginService
  ) {
    this.email = '';
    this.password = '';
    // this.mentors = [];
    // this.mentees = [];
  }

  ngOnInit(): void {
    // this.getpatients();
    // this.getMentors();
  }

  checkType(event: any) {
    this.isPatient = event.target.checked ? true : false;
  }

  login(email: any, password: any) {
    this.loginService.login({
      "email": email,
      "password": password
    }).subscribe((res) => {
      this.toastr.success("Login Successfull");
      console.log(res);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("userId", res.userId);
      localStorage.setItem("role",res.roles[0]);
      if (res.roles[0] === 'Student') {
        this.router.navigate(['/student/main']);
      }
      else {
        this.router.navigate(['/tutor/main']);
      }

    },
      (error) => {
        this.toastr.error(`Invalid Login Details`);
      });

    //this.router.navigate(['/mentee/dashboard']);
    // localStorage.setItem('auth', 'true');
    // localStorage.setItem('mentee', this.isPatient.toString());
    // if (this.isPatient) {
    //   let filter = this.mentees.filter(
    //     (a:any) => a.email == this.email && a.password === this.password
    //   );
    //   if (filter.length != 0) {
    //     localStorage.setItem('id', filter[0]['id']);
    //     this.toastr.success('', 'Login success!');
    //     this.commonService.nextmessage('patientLogin');
    //     this.router.navigate(['/mentee/dashboard']);
    //   } else {
    //     this.toastr.error('', 'Login failed!');
    //   }
    // } else {
    //   let filter = this.mentors.filter(
    //     (a:any) => a.email === this.email && a.password === this.password
    //   );
    //   if (filter.length != 0) {
    //     this.toastr.success('', 'Login success!');
    //     this.commonService.nextmessage('doctorLogin');
    //     localStorage.setItem('id', filter[0]['id']);
    //     this.router.navigate(['/mentor/dashboard']);
    //   } else {
    //     this.toastr.error('', 'Login failed!');
    //   }
    // }
  }

  // getMentors() {
  //   this.commonService.getMentors().subscribe((res) => {
  //     this.mentors = res;
  //   });
  // }

  // getpatients() {
  //   this.commonService.getpatients().subscribe((res) => {
  //     this.mentees = res;
  //   });
  // }
}
