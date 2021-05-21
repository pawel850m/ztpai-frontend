import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';
import { LoginRequest } from '../components/login/login.request';
import { LoginResponse } from '../components/login/login.response';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) { }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.httpClient.post<LoginResponse>(`${this.apiServerUrl}/api/v1/auth/login`, loginRequest)
      .pipe(map(data => {
        this.localStorage.store('JwtToken', data.token);
        return true;
      }));
  }
  logout(): void {
    this.localStorage.clear('JwtToken');
  }
  getJwt(): any{
    return this.localStorage.retrieve('JwtToken');
  }
}
