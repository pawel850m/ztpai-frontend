import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { User} from '../../models/user';
import { Router } from '@angular/router';
import {LoginRequest} from './login.request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRequest: LoginRequest;

  // user: User = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // };
  logged = false;

  constructor(private loginService: LoginService, private router: Router) {
    this.loginRequest = {
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }
  loginUser(): void {
    const data = {
      // this.loginRequest.username = this.user.email,
      email: this.loginRequest.email,
      password: this.loginRequest.password
    };
    this.loginService.login(this.loginRequest)
      .subscribe(
        response => {
          console.log(response);
          this.logged = true;
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.log(error);
        });
  }
}
