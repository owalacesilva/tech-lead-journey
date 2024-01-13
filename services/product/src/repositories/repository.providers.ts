import { ProductRepository } from './implementations/product.repository';

export const repositoryProviders = [
  {
    provide: 'domain/PRODUCT_REPOSITORY',
    useClass: ProductRepository,
  },
];
