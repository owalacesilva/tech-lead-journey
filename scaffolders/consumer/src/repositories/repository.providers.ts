import { AuctionRepository } from './implementations/auction.repository';

export const repositoryProviders = [
  {
    provide: 'domain/AUCTION_REPOSITORY',
    useClass: AuctionRepository,
  },
];
