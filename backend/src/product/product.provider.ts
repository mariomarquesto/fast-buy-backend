import { Product } from '../models/product.entity';

export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
];
