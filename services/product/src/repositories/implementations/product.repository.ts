import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/product';
import { IProductRepository } from '../repository.interfaces';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class ProductRepository implements IProductRepository {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }

  async save(product: Product): Promise<Product> {
    const input: Prisma.ProductCreateInput = {
      title: product.title,
      weight: product.weight,
    };

    const newProduct = await this.prisma.product.create({
      data: input,
    });

    return Product.create({ ...newProduct }, newProduct.id);
  }
}
