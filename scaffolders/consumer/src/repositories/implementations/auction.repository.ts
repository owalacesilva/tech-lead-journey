import { Injectable } from '@nestjs/common';
import { Auction } from '../../domain/scaffold.aggregate';
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

  async save(auction: Auction): Promise<boolean> {
    const input: Prisma.AuctionsCreateInput = {
      internal: auction.interval,
      optOut: auction.optOut,
    };

    const newAuction = await this.prisma.auction.create({
      data: input,
    });

    return !!newAuction;
  }
}
