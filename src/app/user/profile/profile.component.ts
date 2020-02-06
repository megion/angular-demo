import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.data.subscribe(data => {
      this.user = data.user;
      console.log('ProfileComponent update user', this.user);
    });

    //this.router.events.subscribe((event: Event) => {
    //event
    //});
  }

  ngOnInit() {}
}
