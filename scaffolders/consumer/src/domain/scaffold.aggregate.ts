import { IAuctionProps } from './interfaces';
import { Product } from './scaffold.entity';

export class Auction {
  private id: string | number;
  private props: IAuctionProps;

  public get interval(): number {
    return this.props.interval;
  }

  public get optOut(): Date | string {
    return this.props.optOut;
  }

  public get products(): Product[] {
    return this.props.products;
  }

  private constructor(props: IAuctionProps, id: string | number) {
    this.id = id;
    this.props = props;
  }

  public static create(props: IAuctionProps, id?: string | number): Auction {
    const { interval, optOut, products } = props;

    if (!interval) { // Util.isBlank(title)
      throw new Error('Auction title is required');
    }

    if (!optOut) {
      throw new Error('Auction weight is required');
    }

    return new Auction({ interval, optOut, products }, id);
  }
}
