import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { LoginRequest } from '../components/login/login.request';
import { LoginResponse } from '../components/login/login.response';
import {map} from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/api/v1/auth/signin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) { }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.httpClient.post<LoginResponse>(baseUrl, loginRequest)
      .pipe(map(data => {
        this.localStorage.store('JwtToken', data.token);
        return true;
      }));
  }

  getJwt(){
    return this.localStorage.retrieve('JwtToken');
  }
}
