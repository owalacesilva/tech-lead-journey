import { Product } from 'src/domain/product';

export class ProductCreatedEvent {
  constructor(public readonly product: Product) {}
}
