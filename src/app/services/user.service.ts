import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService{
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/api/v1/user/all`);
  }
  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(
      `${this.apiServerUrl}/api/v1/user/edit`, user
    );
  }
  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/v1/user/delete/${userId}`);
  }
  public addUser(user: User): Observable<User> {
    return this.http.post<User>(
      `${this.apiServerUrl}/api/v1/user/add`, user
    );
  }
  public enableUser(userId: number): Observable<void> {
    return this.http.get<void>(`${this.apiServerUrl}/api/v1/user/enable/${userId}`);
  }
  public disableUser(userId: number): Observable<void> {
    return this.http.get<void>(`${this.apiServerUrl}/api/v1/user/disable/${userId}`);
  }
  public requestAdmin(userId: number): Observable<void> {
    return this.http.get<void>(`${this.apiServerUrl}/api/v1/user/request-admin/${userId}`);
  }
}
