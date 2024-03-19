import { User } from 'src/domain/user';
import { Auction } from '../domain/auction';
import { Product } from '../domain/product';

export interface IMapper {}

export interface IAuctionRepository {
  getMany(): Auction[] | Promise<Auction[]>;

  getByGuid(guid: string): Auction | null | Promise<Auction | null>;

  save(auction: Auction): boolean | Promise<boolean>;
}

export interface IProductRepository {
  getByGuid(guid: string): Product | null | Promise<Product | null>;

  save(product: Product): boolean | Promise<boolean>;
}

export interface IUserRepository {
  getByGuid(guid: string): User | null | Promise<User | null>;

  save(user: User): boolean | Promise<boolean>;
}
