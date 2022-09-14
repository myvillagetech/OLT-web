import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TutorSchedulesService {

  header = new HttpHeaders().set(
    "Authorization",
     `Bearer ${localStorage.getItem("accessToken") || ''}`
  );

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllSchedules(tutorId : string):Observable<any>{
    return this.httpClient.get(`${environment.BASE_URL}schedule/tutor/${tutorId}`,{headers : this.header})
  }
}
