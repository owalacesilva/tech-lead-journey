import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Auction } from '../domain/scaffold.aggregate';
import { CreateAuctionCommand } from '../commands/command';
import {
  IAuctionRepository,
  IProductRepository,
} from '../repositories/repository.interfaces';
import { Inject } from '@nestjs/common';
import { Product } from '../domain/scaffold.entity';

@CommandHandler(CreateAuctionCommand)
export class CreateAuctionHandler
  implements ICommandHandler<CreateAuctionCommand> {
  constructor(
    @Inject('domain/AUCTION_REPOSITORY')
    private readonly auctionRepository: IAuctionRepository,
    @Inject('domain/PRODUCT_REPOSITORY')
    private readonly productRepository: IProductRepository,
  ) { }

  async execute(command: CreateAuctionCommand) {
    const { interval, optOut, products } = command;

    const productList = [];
    for (const item of products) {
      let product = await this.productRepository.getByGuid(item.guid);

      if (!product) {
        await this.productRepository.save(item);
        product = Product.create({ title: item.title, weight: item.weight });
      }

      productList.push(product);
    }

    const auction = Auction.create({ interval, optOut, products: productList });

    return await this.auctionRepository.save(auction);
  }
}
