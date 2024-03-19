import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { CreateProductCommand } from '../commands/create_produt.command';
import { IProductRepository } from '../repositories/repository.interfaces';
import { Inject } from '@nestjs/common';

@CommandHandler(CreateProductCommand)
export class GetProductByIdHandler
  implements IQueryHandler<CreateProductCommand>
{
  constructor(
    @Inject('domain/AUCTION_REPOSITORY')
    private readonly produtRepository: IProductRepository,
  ) {}

  async execute() {
    return await this.produtRepository.getMany();
  }
}
