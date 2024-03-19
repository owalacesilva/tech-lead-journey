import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/scaffold.entity';
import { IProductRepository } from '../repository.interfaces';
import { Prisma, PrismaClient } from '@prisma/client';
import { ProductMapper } from '../mappers/product.mapper';

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

  async getByGuid(guid: string): Promise<Product | null> {
    const product = await this.prisma.product.findOne({
      where: {
        guid,
      },
    });

    return !!product ? ProductMapper.toDomain(product) : null;
  }

  async save(product: Product): Promise<boolean> {
    const input: Prisma.ProductsCreateInput = {
      title: product.title,
      weight: product.weight,
    };

    const newProduct = await this.prisma.product.create({
      data: input,
    });

    return !!newProduct;
  }
}
