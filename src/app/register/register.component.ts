import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommonServiceService } from '../common-service.service';

import { ToastrService } from 'ngx-toastr';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  fname = '';
  lname = '';
  email = '';
  phoneNumber = '';
  password = '';
  confirm = '';
  isTutor: boolean = true;
  reg_type = 'Student Register';
  doc_patient = 'Are you a Tutor?';
  constructor(
    private toastr: ToastrService,
    public commonService: CommonServiceService,
    public router: Router,
    public registerService : RegisterService
  ) {}

  ngOnInit(): void {

  }

  changeRegType() {
    if (this.reg_type === 'Tutor Register') {
      this.reg_type = 'Student Register';
      this.doc_patient = 'Are you a Tutor?';
      this.isTutor = true;
    } else {
      this.reg_type = 'Tutor Register';
      this.doc_patient = 'Not a Tutor?';
      this.isTutor = false;
    }
  }

  signup() {
    if (
      this.fname === '' ||
      this.email === '' ||
      this.password === '' ||
      this.confirm === '' || 
      this.phoneNumber === ''
    ) {
      this.toastr.error('', 'Please enter mandatory field!');
    }
     else {
      if (!this.isTutor) {
       const payload = {
        "userId" : 1,
        "firstName" : this.fname,
        "lastName" : this.lname,
        "email" : this.email,
        "phone" : `${this.phoneNumber}`,
        "password" : this.password,
        "dob" : "12-12-1978",
        "active" : 'true',
        "roles" : ["Tutor"]
       }
       this.registerService.register(payload).subscribe(
        (res)=>{
          this.toastr.success("Registeration Successfull");
          console.log(res);
        },
        (error)=>{
          console.log(error);
        }
       )
      } else {
        const payload = {
          "userId" : 1,
          "firstName" : this.fname,
          "lastName" : this.lname,
          "email" : this.email,
          "phone" : `${this.phoneNumber}`,
          "password" : this.password,
          "dob" : "12-12-1978",
          "active" : 'true',
          "roles" : ["Student"]
         }
         this.registerService.register(payload).subscribe(
          (res)=>{
            this.toastr.success("Registeration Successfull");
            this.router.navigate(['/login-page']);
          },
          (error)=>{
            this.toastr.error(`${error.message}`);
          }
         )
      }
    }
  }


}
