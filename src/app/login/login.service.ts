import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginDetils } from './login.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public httpService : HttpClient
  ) { }

  login(loginDetails : ILoginDetils): Observable<any>{
    console.log(loginDetails,"***");
    return this.httpService.post(`${environment.BASE_URL}auth/login`,loginDetails);
  }

}


