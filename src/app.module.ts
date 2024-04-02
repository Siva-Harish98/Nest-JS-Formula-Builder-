import { Module,NestModule,MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormulabuilderController } from './formulabuilder/formulabuilder.controller';
import { FormulaBuilderService } from './formulabuilder/formulabuilderService';
import { Middlewares } from './middlwares/middlware';
import { SecondMiddleware } from './middlwares/secondMiddlware';
import { PrismaController } from './prismaApi/prisma.controller';
import { prismaServiceService } from './prismaApi/prismaService';

@Module({
  imports: [],
  controllers: [AppController, FormulabuilderController,PrismaController],
  providers: [AppService,FormulaBuilderService,prismaServiceService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Middlewares)
      .forRoutes('parser');   
  }
  
   
  

}
