import { Product } from '../domain/product';

export interface IProductRepository {
  save(product: Product): Product | Promise<Product>;
}
