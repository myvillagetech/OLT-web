import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TutorProfileService } from './tutor-profile.service';

@Component({
  selector: 'app-tutor-profile',
  templateUrl: './tutor-profile.component.html',
  styleUrls: ['./tutor-profile.component.css']
})
export class TutorProfileComponent implements OnInit {

  tutorProfile!: FormGroup;
  loggedinUserId : string= localStorage.getItem('userId') || '';
  tutorProfileId : string = '';
  courses = [];

  constructor(
    private formBuilder: FormBuilder,
    private tutorProfileService : TutorProfileService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
    this.getProfileByUserId();
    this.genrateTutorProfile();
    this.addNewSlot() 
  }

  getAllCourses(){
    this.tutorProfileService.getAllCourses().subscribe((res)=>{
      console.log(res);
      this.courses = res.data;
    })
  }

  getProfileByUserId(){
    this.tutorProfileService.getprofilebyuserId(this.loggedinUserId).subscribe((res)=>{
      console.log(res.data.slots.length);
      for(let index=0;index<res.data.slots.length-1;index++){
        this.addNewSlot();
      }
      this.tutorProfile.get('firstName')?.setValue(res.data.firstName);
      this.tutorProfile.get('lastName')?.setValue(res.data.lastName);
      this.tutorProfile.get('email')?.setValue(res.data.email);
      this.tutorProfile.get('title')?.setValue(res.data.title);
      this.tutorProfile.get('discription')?.setValue(res.data.discription);
      this.tutorProfile.get('subject')?.setValue(res.data.subject);
      this.tutorProfile.get('hourlyRate')?.setValue(res.data.hourlyRate);
      this.tutorProfile.get('slots')?.setValue(res.data.slots);
      this.tutorProfileId = res.data._id;
    },(error)=>{
      console.log(error);
    })
  }

  genrateTutorProfile() {
    this.tutorProfile = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      title: [''],
      discription: [''],
      subject: [''],
      hourlyRate: [''],
      slots: this.formBuilder.array([])
    })
  }
  getAvailableSlots(): FormGroup {
    return this.formBuilder.group({
      day: '',
      from: '',
      to: ''
    })
  }

  get availableSlotsFormArray(): FormArray {
    return this.tutorProfile?.get('slots') as FormArray
  }
  addNewSlot() {
    (this.tutorProfile?.get('slots') as FormArray).push(this.getAvailableSlots())
  }
  deleteSlot(index: number) {
    this.availableSlotsFormArray.removeAt(index);
  }

  onSubmit(){
    console.log(this.tutorProfile,this.tutorProfileId);
    let payload = {
      ...this.tutorProfile.value, userId : this.loggedinUserId
    }
    if(this.tutorProfileId === ''){
      this.tutorProfileService.postProfiledata(payload).subscribe((res)=>{
        console.log(res);
      },(error)=>{
        console.log(error);
      })
    }
    else{
      this.tutorProfileService.updateProfileData(payload,this.tutorProfileId).subscribe((res)=>{
        console.log(res);
        this.getProfileByUserId()
        this.router.navigate(['/tutor/main'])
      },(error)=>{
        console.log(error);
      })
    }
   
  }

  navigateToMainPage(){
    this.router.navigate(['/tutor/main']);
  }


}
