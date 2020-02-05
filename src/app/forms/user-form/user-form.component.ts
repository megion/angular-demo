import { Component, OnInit, Input } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  //nameInput: FormControl;
  //fullnameGroup: FormGroup;

  constructor() {}

  ngOnInit() {
    //this.nameInput = new FormControl('');
    //this.nameInput.valueChanges.subscribe(value => {
    //console.log('input value:', value);
    //});
    //this.fullnameGroup = new FormGroup()
  }

  onSubmit() {
    console.log('form submit');
  }
}
