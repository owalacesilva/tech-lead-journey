import { IProductProps } from './interfaces';

export class Product {
  private id: string | number;
  private props: IProductProps;

  public get title(): string {
    return this.props.title;
  }

  public get weight(): number {
    return this.props.weight;
  }

  private constructor(props: IProductProps, id: string | number) {
    this.id = id;
    this.props = props;
  }

  public static create(props: IProductProps, id?: string | number): Product {
    const { title, weight } = props;

    if (!title) { // Util.isBlank(title)
      throw new Error('Product title is required');
    }

    if (!weight) {
      throw new Error('Product weight is required');
    }

    return new Product({ title, weight }, id);
  }
}
