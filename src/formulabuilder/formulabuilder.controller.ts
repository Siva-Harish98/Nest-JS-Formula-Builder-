import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { FormulaRequest } from './formulabuilder.dto';
import { FormulaBuilderService } from './formulabuilderService';
import { Jwtguard } from 'src/guards/authguards';


@UseGuards(Jwtguard)
@Controller('parser')
export class FormulabuilderController {
constructor(private formbuilderService:FormulaBuilderService){}
    @Post('/formulaValidator')
  FormulValidating(@Body() Parameter: FormulaRequest) {
    return this.formbuilderService.transformer(Parameter)
  }
}
