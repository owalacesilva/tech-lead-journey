import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserDto } from './dtos/create_user.dto';
import { CreateUserCommand } from './commands/create_user.command';

@Injectable()
export class AppService {
  constructor(private commandBus: CommandBus) {}

  public async create(dto: CreateUserDto): Promise<any> {
    return await this.commandBus.execute(
      new CreateUserCommand(dto.email, dto.password, dto.name),
    );
  }
}
