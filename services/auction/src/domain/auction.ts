import { Aggregate } from 'src/domain/shared/aggregate.abstract';
import { Product } from './product';

interface IAuctionProps {
  interval: number;
  optOut: Date | string;
}

export class Auction extends Aggregate<IAuctionProps> {
  private _products: Product[];

  public get interval(): number {
    return this._props.interval;
  }

  public get optOut(): Date | string {
    return this._props.optOut;
  }

  public get products(): Product[] {
    return this._products;
  }

  private constructor(props: IAuctionProps, id: string | number) {
    super(props, id);
  }

  public static create(props: IAuctionProps, id?: string | number): Auction {
    const { interval, optOut } = props;

    if (!interval) {
      throw new Error('Auction title is required');
    }

    if (!optOut) {
      throw new Error('Auction weight is required');
    }

    return new Auction({ interval, optOut }, id);
  }
}
