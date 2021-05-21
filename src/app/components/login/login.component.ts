import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import {LoginRequest} from './login.request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRequest: LoginRequest;
  logged = false;

  constructor(private loginService: LoginService, private router: Router) {
    this.loginRequest = {
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.loginService.logout();
  }
  loginUser(): void {
    const data = {
      email: this.loginRequest.email,
      password: this.loginRequest.password
    };
    this.loginService.login(this.loginRequest)
      .subscribe(
        response => {
          console.log(response);
          this.logged = true;
          this.router.navigateByUrl('/dashboard');
        },
        error => {
          console.log(error);
        });
  }
}
