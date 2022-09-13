import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    public httpClient : HttpClient
  ) { }

  register(payload:any) : Observable<any>{
    return this.httpClient.post(`${environment.BASE_URL}auth/signup`,payload);
  }
}
