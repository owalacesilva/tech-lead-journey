import { Aggregate } from 'src/domain/shared/aggregate.abstract';

interface IProductProps {
  title: string;
  weight: number;
}

export class Product extends Aggregate<IProductProps> {
  public get title(): string {
    return this._props.title;
  }

  public get weight(): number {
    return this._props.weight;
  }

  private constructor(props: IProductProps, id: string | number) {
    super(props, id);
  }

  public static create(props: IProductProps, id?: string | number): Product {
    const { title, weight } = props;

    if (!title) {
      throw new Error('Product title is required');
    }

    if (!weight) {
      throw new Error('Product weight is required');
    }

    return new Product({ title, weight }, id);
  }
}
