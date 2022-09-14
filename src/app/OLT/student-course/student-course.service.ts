import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentCourseService {
  header = new HttpHeaders().set(
    "Authorization",
     `Bearer ${localStorage.getItem("accessToken") || ''}`
  );

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllCourses():Observable<any>{
    return this.httpClient.get(`${environment.BASE_URL}course`,{headers : this.header});
  }

  getProfilesByCourseName(courseName :string):Observable<any>{
    return this.httpClient.get(`${environment.BASE_URL}tutorProfile/course/${courseName}`,{headers : this.header});
  }

  createSchedule(payload : any):Observable<any>{
    return this.httpClient.post(`${environment.BASE_URL}schedule`,payload,{headers : this.header});

  }
  
}
