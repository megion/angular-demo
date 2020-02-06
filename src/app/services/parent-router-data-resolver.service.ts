import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from 'src/app/models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ParentRouterDataResolverService implements Resolve<User> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): User | Observable<User> | Promise<User> {
    const user: User = route.parent.data.user as User;
    console.log('ParentRouterDataResolverService :', user);
    return of(user);
  }
}
