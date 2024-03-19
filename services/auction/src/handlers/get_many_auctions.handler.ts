import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { CreateAuctionCommand } from '../commands/create_auction.command';
import { IAuctionRepository } from '../repositories/repository.interfaces';
import { Inject } from '@nestjs/common';
import { AUCTION_REPOSITORY } from 'src/domain/constants';

@CommandHandler(CreateAuctionCommand)
export class GetAuctionByIdHandler
  implements IQueryHandler<CreateAuctionCommand>
{
  constructor(
    @Inject(AUCTION_REPOSITORY)
    private readonly auctionRepository: IAuctionRepository,
  ) {}

  async execute() {
    return await this.auctionRepository.getMany();
  }
}
