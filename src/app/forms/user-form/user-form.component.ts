import { Component, OnInit, Input, OnDestroy } from '@angular/core';
//import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  @Input() user: User;
  //nameInput: FormControl;
  //fullnameGroup: FormGroup;

  timer: Observable<number> = timer(0, 1000);

  constructor() {}

  ngOnInit() {
    //this.nameInput = new FormControl('');
    //this.nameInput.valueChanges.subscribe(value => {
    //console.log('input value:', value);
    //});
    //this.fullnameGroup = new FormGroup()

    console.log("user form init");
    this.timer.subscribe((second: number) => {
      console.log('timer: ', second);
    });
  }

  ngOnDestroy(): void {
    delete this.timer;
    console.log("user form destroy");
    //this.timer.
  }

  onSubmit() {
    console.log('form submit');
  }
}
