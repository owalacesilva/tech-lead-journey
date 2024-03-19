import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateAuctionDto } from './create_auction.dto';
import { CreateAuctionCommand } from '../../commands/create_auction.command';

@Controller('auctions')
export class CreateAuctionController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body('auction') dto: CreateAuctionDto) {
    const { interval, optOut, products } = dto;
    const command = new CreateAuctionCommand(interval, optOut, products);

    return await this.commandBus.execute(command);
  }
}
