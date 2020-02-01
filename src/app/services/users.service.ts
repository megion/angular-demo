import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      name: 'Ivan',
      id: 1,
    },
    {
      name: 'Fedor',
      id: 2,
    },
    {
      name: 'Petr',
      id: 3,
    },
  ];

  constructor() {}

  getUser(userId: number): User {
    return this.users.find((u: User) => {
      return u.id === userId;
    });
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
