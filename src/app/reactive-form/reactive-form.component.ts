import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  form: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      username: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      age: [''],
      gender: ['male'],
      interest: [''],
    });
  }

  onSubmit(formData: {}) {
    console.log(formData);
  }
}
