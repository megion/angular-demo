import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
  ) {
    this.route.params.subscribe(params => {
      console.log('user component params: ', params);
      const userId: number = parseInt(params.userId, 10);
      this.user = this.userService.getUser(userId);
    });

    this.route.data.subscribe(data => {
      console.log('route.data', data.user);
    });

    //this.router.events.subscribe((event: Event) => {
    //event
    //});
  }

  ngOnInit() {}
}
