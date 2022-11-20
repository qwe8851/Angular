import { Component } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'inventory-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  product: Product;

  constructor() {
    this.product = new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/resources/images/products/black-hat.jpg'
,      ['Men', 'Accessories', 'Hats'],
      29.99
    );
  }
}
