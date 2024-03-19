import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Auction } from '../domain/auction';
import { CreateAuctionCommand } from '../commands/create_auction.command';
import {
  IAuctionRepository,
  IProductRepository,
} from '../repositories/repository.interfaces';
import { Inject } from '@nestjs/common';
import { Product } from '../domain/product';
import { AUCTION_REPOSITORY, PRODUCT_REPOSITORY } from 'src/domain/constants';

@CommandHandler(CreateAuctionCommand)
export class CreateAuctionHandler
  implements ICommandHandler<CreateAuctionCommand>
{
  constructor(
    @Inject(AUCTION_REPOSITORY)
    private readonly auctionRepository: IAuctionRepository,
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: IProductRepository,
  ) {}

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

    const auction = Auction.create({ interval, optOut });
    // auction.addProducts(productList);

    return await this.auctionRepository.save(auction);
  }
}
