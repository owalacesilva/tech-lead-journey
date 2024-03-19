import { Module } from '@nestjs/common';
import { CreateProductController } from './create_product.controller';
import { CreateProductHandler } from '../../handlers/create_product.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { repositoryProviders } from '../../repositories/repository.providers';

@Module({
  imports: [CqrsModule],
  controllers: [CreateProductController],
  providers: [...repositoryProviders, CreateProductHandler],
})
export class CreateProductModule {}
