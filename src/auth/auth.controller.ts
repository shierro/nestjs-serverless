import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }

  @Post()
  postHello(): string {
    return 'hello';
  }
}
