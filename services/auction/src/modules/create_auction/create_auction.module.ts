import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateAuctionController } from './create_auction.controller';
import { CreateAuctionHandler } from '../../handlers/create_auction.handler';
import { repositoryProviders } from '../../repositories/repository.providers';

@Module({
  imports: [CqrsModule],
  controllers: [CreateAuctionController],
  providers: [...repositoryProviders, CreateAuctionHandler],
})
export class CreateAuctionModule {}
