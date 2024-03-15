import { Body, Controller, Post } from '@nestjs/common';
import { ParserService } from './parserService.service';
import { IncomingRequest } from './formulabuilder.dto';

@Controller('parser')
export class ParserController {
//   constructor(private readonly parserService: ParserService) {}

  @Post('/formulaValidator')
  FormulValidating(@Body() Parameter: IncomingRequest) {
    return Parameter
  }
}
