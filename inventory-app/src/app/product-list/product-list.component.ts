import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';

/**
 * @ProductsList: ProductRows 전체를 렌더링하고
 * 현재 선택된 Product를 저장하는 컴포넌트
 */
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  /**
   * @Input ProductList - 전달된 product[]
   */
  @Input() ProductList!: Product[];

  /**
   * @input onProductSelected - 새 Product가 선택될 때 마다
   * 현재 Product출력
   */
  @Output() onProductSelected!: EventEmitter<Product>;

  /**
   * @property currentProduct - 현재 선택된 `Product`가 포함된
   * 로컬 상태
   */
  private currentProduct!: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean{
    if (!product || !this.currentProduct) {
      return false
    }
    return product.sku === this.currentProduct.sku; // product를 입력받아 true리턴(반대의 경우 false리턴)
  }
}
