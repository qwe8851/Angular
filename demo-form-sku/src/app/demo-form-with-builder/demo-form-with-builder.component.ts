import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-builder',
  templateUrl: './demo-form-with-builder.component.html',
  styleUrls: ['./demo-form-with-builder.component.css'],
})
export class DemoFormWithBuilderComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['ABC123'],
    });
  }

  ngOnInit(): void {}

  onSubmit(value: string): void {
    console.log('wb-your submitted value: ', value);
  }
}
