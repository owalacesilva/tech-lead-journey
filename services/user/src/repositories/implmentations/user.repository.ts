import { IUserRepository } from '../repository.interfaces';

export class UserRepository implements IUserRepository {
  constructor() {}

  async save(user: User): Promise<User> {
    return user;
  }
}
