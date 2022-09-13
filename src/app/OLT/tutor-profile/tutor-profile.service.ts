import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TutorProfileService {
  header = new HttpHeaders().set(
    "Authorization",
     `Bearer ${localStorage.getItem("accessToken") || ''}`
  );

  constructor(
    private httpClient : HttpClient
  ) { }
  
  getprofilebyuserId(userId : string) : Observable<any> {
    
    return this.httpClient.get(`${environment.BASE_URL}tutorProfile/userId/${userId}`,{headers : this.header});
  }

  postProfiledata(payload : any) : Observable<any> {
    return this.httpClient.post(`${environment.BASE_URL}tutorProfile`,payload,{headers : this.header});
  }

  updateProfileData(payload : any, tutorId : string) : Observable<any> {
    return this.httpClient.put(`${environment.BASE_URL}tutorProfile/${tutorId}`,payload,{headers : this.header});
  }
  
}
