import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() myuser: User;
  @Output() userSelection: EventEmitter<User> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectUser() {
    // emit event
    this.userSelection.emit(this.myuser);
  }
}
