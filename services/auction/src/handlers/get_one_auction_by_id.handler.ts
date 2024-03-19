import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CreateAuctionCommand } from '../commands/create_auction.command';
import { IAuctionRepository } from '../repositories/repository.interfaces';
import { Inject } from '@nestjs/common';
import { AuctionNotFoundError } from 'src/domain/errors';
import { AUCTION_REPOSITORY } from 'src/domain/constants';

@QueryHandler(CreateAuctionCommand)
export class GetAuctionByIdHandler implements IQueryHandler<string> {
  constructor(
    @Inject(AUCTION_REPOSITORY)
    private readonly auctionRepository: IAuctionRepository,
  ) {}

  async execute(guid: string) {
    const auction = await this.auctionRepository.getByGuid(guid);

    if (!auction) {
      throw new AuctionNotFoundError(guid);
    }

    return auction;
  }
}
