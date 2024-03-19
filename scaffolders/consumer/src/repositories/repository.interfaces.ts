import { Auction } from '../domain/scaffold.aggregate';
import { Product } from '../domain/scaffold.entity';

export interface IMapper { }

export interface IAuctionRepository {
  save(auction: Auction): boolean | Promise<boolean>;
}

export interface IProductRepository {
  getByGuid(guid: string): Product | null | Promise<Product | null>;

  save(product: Product): boolean | Promise<boolean>;
}
