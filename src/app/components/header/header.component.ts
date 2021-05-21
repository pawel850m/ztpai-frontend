import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public users?: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  public getAllUsers(): void {
    this.userService.getAllUsers()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
