import { Module,NestModule,MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormulabuilderController } from './formulabuilder/formulabuilder.controller';
import { FormulaBuilderService } from './formulabuilder/formulabuilderService';
import { Middleware } from './middlwares/middlware';
import { SecondMiddleware } from './middlwares/secondMiddlware';

@Module({
  imports: [],
  controllers: [AppController, FormulabuilderController],
  providers: [AppService,FormulaBuilderService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Middleware)
      .forRoutes(FormulabuilderController,AppController);

      consumer
      .apply(SecondMiddleware)
      .forRoutes(AppController);
  }
  
   
  

}
