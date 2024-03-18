import { Test, TestingModule } from '@nestjs/testing';
import { FormulabuilderController } from './formulabuilder.controller';

describe('FormulabuilderController', () => {
  let controller: FormulabuilderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FormulabuilderController],
    }).compile();

    controller = module.get<FormulabuilderController>(FormulabuilderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
