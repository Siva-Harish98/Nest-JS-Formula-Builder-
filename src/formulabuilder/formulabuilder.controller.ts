import { Body, Controller, Post } from '@nestjs/common';
import { FormulaRequest } from './formulabuilder.dto';
import { FormulaBuilderService } from './formulabuilderService';

@Controller('parser')
export class FormulabuilderController {
constructor(private formbuilderService:FormulaBuilderService){}
    @Post('/formulaValidator')
  FormulValidating(@Body() Parameter: FormulaRequest) {
    return this.formbuilderService.transformer(Parameter)
  }
}
