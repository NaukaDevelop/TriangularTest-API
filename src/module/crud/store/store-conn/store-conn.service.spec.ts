import { Test, TestingModule } from '@nestjs/testing';
import { StoreConnService } from './store-conn.service';

describe('StoreConnService', () => {
  let service: StoreConnService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreConnService],
    }).compile();

    service = module.get<StoreConnService>(StoreConnService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
