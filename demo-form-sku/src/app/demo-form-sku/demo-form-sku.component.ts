import { OnInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css'],
})
export class DemoFormSkuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form:any):void{
    console.log('your submitted value: ', form);
  }
}
