import { Component, Input } from '@angular/core';

/**
 * 제품 가격을 보여주는 컴포넌트
 */
@Component({
  selector: 'price-display',
  templateUrl: `
  <div class="price-display">\${{price}}</div>` //템플릿에서 사용하기 때문에 이스케이프
})
export class PriceDisplayComponent {
  @Input() price!: number;
}
