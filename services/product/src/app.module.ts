import { Module } from '@nestjs/common';
import { CreateProductModule } from './modules/create_product/create_product.module';

@Module({
  imports: [CreateProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
