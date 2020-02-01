import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  private user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
  ) {
    this.route.params.subscribe(params => {
      console.log('user component params: ', params);
      const userId: number = parseInt(params.userId, 10);
      this.user = this.userService.getUser(userId);
    });
  }

  ngOnInit() {}
}
