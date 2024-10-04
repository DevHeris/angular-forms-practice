import { AbstractControl, ValidatorFn } from '@angular/forms';

export function confirmPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    return password &&
      confirmPassword &&
      password.value !== confirmPassword.value
      ? { passwordsMismatch: true }
      : null;
  };
}
export function ageValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value < 18) {
      return { notUpToAge: true };
    } else {
      return null;
    }
  };
}
