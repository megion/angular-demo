import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
//import 'rxjs/add/observable/of';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserResolveService implements Resolve<User> {
  constructor(private userService: UsersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): User | Observable<User> | Promise<User> {
    // throw new Error('Method not implemented.');
    const userId: number = parseInt(route.params.userId, 10);
    console.log('UserResolveService getUser by id:', userId);
    return of(this.userService.getUser(userId));
  }
}
