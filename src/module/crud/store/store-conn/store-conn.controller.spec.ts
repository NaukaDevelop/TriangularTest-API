import { Test, TestingModule } from '@nestjs/testing';
import { StoreConnController } from './store-conn.controller';

describe('StoreConnController', () => {
  let controller: StoreConnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreConnController],
    }).compile();

    controller = module.get<StoreConnController>(StoreConnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
