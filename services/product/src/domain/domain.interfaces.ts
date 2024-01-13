import { UserName } from './value_objects/user_name';

export interface IUserProps {
  name: UserName;
}

export interface IProductProps {
  title: string;
  weight: number;
}

export interface IProductImageProps {
  storageUrl: string;
}
