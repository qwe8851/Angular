import { Component, HostBinding, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-image',
  templateUrl: `
  <img class="produt-image" [src]="product.imageUrl"
  `,
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  @Input() product!: Product;
  @HostBinding('attr.class') csssClass = 'ui small image';
}
