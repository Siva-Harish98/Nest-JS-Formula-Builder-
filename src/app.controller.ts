import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('demo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/getData')
  getHello(): string {
    return this.appService.getHello();
  }
}
