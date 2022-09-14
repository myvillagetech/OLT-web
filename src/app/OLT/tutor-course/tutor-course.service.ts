import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TutorCourseService {

  header = new HttpHeaders().set(
    "Authorization",
     `Bearer ${localStorage.getItem("accessToken") || ''}`
  );

  constructor(
    private httpClient : HttpClient
  ) { }
  // {/course, GET}
  

  getAllCourses():Observable<any>{
    return this.httpClient.get(`${environment.BASE_URL}course`,{headers : this.header});
  }

  getAllTutorCourses():Observable<any>{
    return this.httpClient.get(`${environment.BASE_URL}`)
  }
}
