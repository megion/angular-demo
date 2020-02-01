import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import { UsersService } from '../services/users.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserResolverService implements Resolve<User> {
  constructor(private userService: UsersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): User | Observable<User> | Promise<User> {
    //throw new Error('Method not implemented.');
    return Observable.of(this.userService.getUser(1));
  }
}
