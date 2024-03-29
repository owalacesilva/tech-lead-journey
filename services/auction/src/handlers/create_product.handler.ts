import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Product } from '../domain/product';
import { CreateProductCommand } from '../commands/create_product.command';
import { IProductRepository } from '../repositories/repository.interfaces';
import { Inject } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from 'src/domain/constants';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly repository: IProductRepository,
  ) {}

  async execute(command: CreateProductCommand) {
    const { title, weight } = command;
    const product = Product.create({ title, weight });

    return await this.repository.save(product);
  }
}
