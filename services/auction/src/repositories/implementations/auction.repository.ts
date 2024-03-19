import { Injectable } from '@nestjs/common';
import { Auction } from '../../domain/auction';
import { IAuctionRepository } from '../repository.interfaces';
import { Prisma, PrismaClient } from '@prisma/client';

@Injectable()
export class AuctionRepository implements IAuctionRepository {
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

  async getMany(): Promise<Auction[]> {
    throw new Error('Method not implemented.');
  }

  async getByGuid(guid: string): Promise<Auction> {
    throw new Error('Method not implemented.');
  }

  async save(auction: Auction): Promise<boolean> {
    const input: Prisma.AuctionCreateInput = {
      guid: String(auction.id),
      interval: auction.interval,
      optOut: auction.optOut,
      // guid: auction.guid,
      // name: auction.name,
      // description: auction.description,
      // startDate: auction.startDate,
      // endDate: auction.endDate,
      // startingPrice: auction.startingPrice,
      // product: {
      //   connect: {
      //     guid: auction.product.guid,
      //   },
      // },
      // seller: {
      //   connect: {
      //     guid: auction.seller.guid,
      //   },
      // },
    };

    const newAuction = await this.prisma.auction.create({
      data: input,
    });

    return !!newAuction;
  }
}
