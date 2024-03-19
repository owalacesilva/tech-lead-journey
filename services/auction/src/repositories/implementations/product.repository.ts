import { Injectable } from '@nestjs/common';
import { Product } from '../../domain/product';
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
    const product = await this.prisma.product.findFirst({
      where: {
        guid,
      },
    });

    return !!product ? ProductMapper.toDomain(product) : null;
  }

  async save(product: Product): Promise<boolean> {
    const input: Prisma.ProductCreateInput = {
      guid: String(product.id),
      title: product.title,
      weight: product.weight,
    };

    const newProduct = await this.prisma.product.create({
      data: input,
    });

    return !!newProduct;
  }
}
