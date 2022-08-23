import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from '../common-service.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  fname = '';
  lname = '';
  email = '';
  password = '';
  confirm = '';
  isPatient: boolean = true;
  mentors: any = [];
  mentees: any = [];
  reg_type = 'Mentee Register';
  doc_patient = 'Are you a Mentor?';
  constructor(
    private toastr: ToastrService,
    public commonService: CommonServiceService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getpatients();
    this.getMentors();
  }

  changeRegType() {
    if (this.reg_type === 'Mentor Register') {
      this.reg_type = 'Mentee Register';
      this.doc_patient = 'Are you a Mentor?';
      this.isPatient = true;
    } else {
      this.reg_type = 'Mentor Register';
      this.doc_patient = 'Not a Mentor?';
      this.isPatient = false;
    }
  }

  signup() {
    if (
      this.fname === '' ||
      this.email === '' ||
      this.password === '' ||
      this.confirm === ''
    ) {
      this.toastr.error('', 'Please enter mandatory field!');
    } else {
      if (!this.isPatient) {
        let params = {
          id: this.mentors.length + 1,
          doctor_name: this.fname + ' ' + this.lname,
          password: this.password,
          email: this.email,
        };
        this.commonService.createDoctor(params).subscribe((res) => {
          this.toastr.success('', 'Register successfully!');
          this.router.navigate(['/login-page']);
        });
      } else {
        let params = {
          id: this.mentors.length + 1,
          doctor_name: this.fname + ' ' + this.lname,
          password: this.password,
          email: this.email,
        };
        this.commonService.createPatient(params).subscribe((res) => {
          this.toastr.success('', 'Register successfully!');
          this.router.navigate(['/login-page']);
        });
      }
    }
  }

  getMentors() {
    this.commonService.getMentors().subscribe((res) => {
      this.mentors = res;
    });
  }

  getpatients() {
    this.commonService.getpatients().subscribe((res) => {
      this.mentees = res;
    });
  }
}
