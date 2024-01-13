import { randomUUID } from 'crypto';
import { IUserProps } from './domain.interfaces';
import { UserName } from './value_objects/user_name';

export class User {
  private id: string | number;
  private props: IUserProps;

  public get name(): UserName {
    return this.props.name;
  }

  private constructor(props: IUserProps, id: string | number) {
    this.id = id;
    this.props = props;
  }

  public static create(props, id?: string | number): User {
    // create value objects
    // validate business rules
    // create domain event

    return new User({ ...props }, randomUUID());
  }
}
