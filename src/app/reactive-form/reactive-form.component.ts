import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { confirmPasswordValidator } from '../comfirm-password.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  form: FormGroup = new FormGroup(
    {
      username: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ),
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      password: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.minLength(6)])
      ),
      confirmPassword: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      interest: new FormControl('', Validators.required),
    },
    { validators: confirmPasswordValidator() }
  );

  onSubmit(): void {
    console.log(this.form);
    if (this.form.hasError('passwordsMismatch')) {
      console.log('Passwords do not match!');
    }
  }
}
