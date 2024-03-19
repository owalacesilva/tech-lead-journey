import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands/create_user.command';
import { IUserRepository } from '../repositories/repository.interfaces';
import { User } from 'src/domain/user';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly repository: IUserRepository) {}

  async execute(command: CreateUserCommand) {
    const { email, password, name } = command;
    const user = User.create({ email, password, name });

    return await this.repository.save(user);
  }
}
