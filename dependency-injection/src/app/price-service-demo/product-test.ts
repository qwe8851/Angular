import { Product } from './product.model.1';

describe('Product', () => {
  let product: Product;

  beforeEach(() => {
    product = new Product(11);
  });

  describe('price', () => {
    it('is calculated vased on the basePrice and the state', () => {
      expect(product.totalPrice('FL')).toBe(11.66);
    });
  });
});
