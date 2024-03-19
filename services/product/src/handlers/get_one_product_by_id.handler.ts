import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { Product } from '../domain/product';
import { CreateProductCommand } from '../commands/create_product.command';
import { IProductRepository } from '../repositories/repository.interfaces';
import { Inject } from '@nestjs/common';

@CommandHandler(CreateProductCommand)
export class GetProductByIdHandler
  implements IQueryHandler<CreateProductCommand>
{
  constructor(
    @Inject('domain/AUCTION_REPOSITORY')
    private readonly productRepository: IProductRepository,
  ) {}

  async execute(query: GetProductByIdCommand) {
    const product = await this.productRepository.getByGuid(query.guid);

    if (!product) {
      throw new ProductNotFoundError(query.guid);
    }

    return product;
  }
}
