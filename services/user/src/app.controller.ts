import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dtos/create_user.dto';

@Controller('/users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(dto: CreateUserDto): Promise<any> {
    return this.appService.create(dto);
  }
}
