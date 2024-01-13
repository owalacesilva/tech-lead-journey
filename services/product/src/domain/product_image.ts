import { randomUUID } from 'crypto';
import { IProductImageProps } from './domain.interfaces';

export class ProductImage {
  private id: string | number;
  private props: IProductImageProps;

  public get storageUrl(): string {
    return this.props.storageUrl;
  }

  private constructor(props: IProductImageProps, id: string | number) {
    this.id = id;
    this.props = props;
  }

  public static create(props, id?: string | number): ProductImage {
    // create value objects
    // validate business rules
    // create domain event

    return new ProductImage({ ...props }, randomUUID());
  }
}
