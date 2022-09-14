import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentSchedulesService {

  header = new HttpHeaders().set(
    "Authorization",
     `Bearer ${localStorage.getItem("accessToken") || ''}`
  );

  constructor(
    private httpClient : HttpClient
  ) { }

  getAllSchedules(studentId : string):Observable<any>{
    return this.httpClient.get(`${environment.BASE_URL}schedule/student/${studentId}`,{headers : this.header})
  }
}
