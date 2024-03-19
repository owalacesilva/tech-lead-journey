import { AUCTION_REPOSITORY, PRODUCT_REPOSITORY } from 'src/domain/constants';
import { AuctionRepository } from './implementations/auction.repository';
import { ProductRepository } from 'src/repositories/implementations/product.repository';

export const repositoryProviders = [
  {
    provide: AUCTION_REPOSITORY,
    useClass: AuctionRepository,
  },
  {
    provide: PRODUCT_REPOSITORY,
    useClass: ProductRepository,
  },
];
