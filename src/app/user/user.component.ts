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
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router,
  ) {
    this.route.params.subscribe(params => {
      console.log('user component params: ', params);
    });

    const ctx = this;
    this.route.data.subscribe({
      next(data: any) {
        ctx.user = data.user;
        console.log('UserComponent update user', ctx.user);
      },
      error(err) {
        console.error('something wrong occurred: ' + err);
      },
      complete() {
        console.log('UserComponent done');
      },
    });
    //data => {
    //this.user = data.user;
    //console.log('UserComponent update user', this.user);
    //});

    //this.router.events.subscribe((event: Event) => {
    //event
    //});
  }

  ngOnInit() {}
}
