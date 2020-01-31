import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

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

  constructor() {
    this.users = [
      {
        name: 'Ivan',
      },
      {
        name: 'Fedor',
      },
      {
        name: 'Petr',
      },
    ];

    this.selectedUser = this.users[0];
  }

  ngOnInit() {}

  setColor(color: string) {
    this.mycolor = color;
  }

  setSelectUser(user: User) {
    this.selectedUser = user;
  }
}
