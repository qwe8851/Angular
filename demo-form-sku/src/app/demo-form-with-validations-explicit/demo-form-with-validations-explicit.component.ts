import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-calidations-explicit',
  templateUrl: './demo-form-with-calidations-explicit.component.html',
  styleUrls: ['./demo-form-with-calidations-explicit.component.css'],
})
export class DemoFormWithValidationsExplicitComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.required],
    });

    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit(): void {}

  onSubmit(value: string) {
    console.log('c-you submitted value: ', value);
  }
}
