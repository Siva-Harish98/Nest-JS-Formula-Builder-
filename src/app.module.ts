import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParserController } from './parser/parser.controller';

@Module({
  imports: [],
  controllers: [AppController, ParserController],
  providers: [AppService],
})
export class AppModule {}
