import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
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
      age: new FormControl('', ageValidator()),
      gender: new FormControl(''),
      interest: new FormControl(''),
    },
    { validators: confirmPasswordValidator() }
  );

  onSubmit(): void {
    console.log(this.age.hasError('notUpToAge'));
  }

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
}
