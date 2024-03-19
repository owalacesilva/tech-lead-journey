import { Module } from '@nestjs/common';
import { CreateAuctionModule } from './modules/create_auction/create_auction.module';

@Module({
  imports: [CreateAuctionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
