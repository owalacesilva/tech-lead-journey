import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Product } from '../domain/product';
import { CreateProductCommand } from '../commands/create_product.command';
import { IProductRepository } from '../repositories/repository.interfaces';
import { Inject } from '@nestjs/common';
import { ProductCreatedEvent } from 'src/events/product_created.event';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(
    private readonly eventBus: EventBus,
    @Inject('domain/PRODUCT_REPOSITORY')
    private readonly repository: IProductRepository,
  ) {}

  async execute(command: CreateProductCommand) {
    const { title, weight } = command;
    const product = Product.create({ title, weight });

    try {
      // validar id do oferta
      const persistedProduct = await this.repository.save(product);
    } catch() {}

    this.eventBus.publish(new ProductCreatedEvent(persistedProduct));
  }
}
