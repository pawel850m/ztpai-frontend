import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../models/project';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

// const baseUrl = 'http://localhost:8080/api/v1/project/';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/api/v1/project/all`);
  }
  public addProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiServerUrl}/api/v1/project/add`, project);
  }
  public deleteProject(projectId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/v1/project/delete/${projectId}`);
  }
  public updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiServerUrl}/api/v1/project/edit`, project);
  }
  public closeProject(projectId: number): Observable<void> {
    return this.http.get<void>(`${this.apiServerUrl}/api/v1/project/close/${projectId}`);
  }
}
