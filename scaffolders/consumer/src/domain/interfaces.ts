import { Product } from './scaffold.entity';
import { UserName } from './value_objects/scaffold';

export interface IUserProps {
  name: UserName;
}

export interface IProductProps {
  title: string;
  weight: number;
}

export interface IProductImageProps {
  storageUrl: string;
}

export interface IAuctionProps {
  interval: number;
  optOut: Date | string;
  products: Array<Product>;
}
