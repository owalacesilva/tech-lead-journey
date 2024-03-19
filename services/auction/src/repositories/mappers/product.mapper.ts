import { Product } from '../../domain/product';
import { IMapper } from '../repository.interfaces';

export class ProductMapper implements IMapper {
  static toDomain(raw: any): Product {
    return Product.create({ title: raw.title, weight: raw.weight });
  }
}
