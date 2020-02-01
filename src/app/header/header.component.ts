import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  x = 3;
  myclass = 'red_';
  mycolor = 'green';

  users: User[];
  selectedUser: User;

  constructor(private router: Router, private userService: UsersService) {
    this.users = userService.getAllUsers();

    this.selectedUser = this.users[0];
  }

  ngOnInit() {}

  setColor(color: string) {
    this.mycolor = color;
  }

  setSelectUser(user: User) {
    this.selectedUser = user;
  }

  goToUser(userId: number) {
    this.router.navigate(['user', userId]);
  }
}
