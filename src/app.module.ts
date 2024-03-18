import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormulabuilderController } from './formulabuilder/formulabuilder.controller';
import { FormulaBuilderService } from './formulabuilder/formulabuilderService';

@Module({
  imports: [],
  controllers: [AppController, FormulabuilderController],
  providers: [AppService,FormulaBuilderService],
})
export class AppModule {}
