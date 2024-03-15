import { Body, Controller, Post } from '@nestjs/common';
import { ParserService } from './parserService.service';
import { FormulaRequest, IncomingRequest } from './formulabuilder.dto';

@Controller('parser')
export class ParserController {
  constructor(private readonly parserService: ParserService) {}

  @Post('/formulaValidator')
  FormulValidating(@Body() Parameter: FormulaRequest) {
    return this.parserService.transformer(Parameter)
  }
}

