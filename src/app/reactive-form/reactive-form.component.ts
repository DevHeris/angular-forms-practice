import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  ageValidator,
  confirmPasswordValidator,
} from '../custom-validators.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  form: FormGroup = new FormGroup(
    {
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl('', Validators.required),
      age: new FormControl('', [ageValidator(), Validators.required]),
      gender: new FormControl('male', Validators.required),
      interest: new FormControl('', Validators.required),
    },
    { validators: confirmPasswordValidator() }
  );

  passValidation: boolean = false;
  errs: ValidationErrors[] = [];

  get username(): AbstractControl {
    return this.form.get('username');
  }
  get email(): AbstractControl {
    return this.form.get('email');
  }
  get password(): AbstractControl {
    return this.form.get('password');
  }
  get confirmPassword(): AbstractControl {
    return this.form.get('confirmPassword');
  }
  get age(): AbstractControl {
    return this.form.get('age');
  }
  get gender(): AbstractControl {
    return this.form.get('gender');
  }
  get interest(): AbstractControl {
    return this.form.get('interest');
  }

  onSubmit(): void {
    for (let controlValue of Object.values(this.form.controls)) {
      this.errs.push(controlValue.errors);
    }
    this.passValidation = this.errs.every((err) => err === null);
  }
}
