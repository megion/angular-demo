import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  nameInput: FormControl;

  constructor() {}

  ngOnInit() {
    this.nameInput = new FormControl('UserName');
    this.nameInput.valueChanges.subscribe(value => {
      console.log('input value:', value);
    });
  }
}
