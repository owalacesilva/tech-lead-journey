import { UserName } from './value_objects/user_name';

export interface IUserProps {
  email: string;
  password: string;
  name: UserName;
}
