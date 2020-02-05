import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidationErrors,
} from '@angular/forms';
import { forbiddenNameValidator } from './forbidden-name-validator';

@Directive({
  selector: '[appForbiddenName]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ForbiddenNameDirective,
      multi: true,
    },
  ],
})
export class ForbiddenNameDirective implements Validator {
  @Input('appForbiddenName') forbiddenName: string;
  validate(control: AbstractControl): ValidationErrors {
    return forbiddenNameValidator(new RegExp(this.forbiddenName))(control);
  }
}
