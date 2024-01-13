import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateProductDto } from './create_product.dto';
import { CreateProductCommand } from '../../commands/create_product.command';

@Controller('products')
export class CreateProductController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async create(@Body('product') dto: CreateProductDto) {
    const { title, weight } = dto;
    const command = new CreateProductCommand(title, weight);

    return await this.commandBus.execute(command);
  }
}
