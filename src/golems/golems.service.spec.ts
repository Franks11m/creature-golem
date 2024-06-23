import { Test, TestingModule } from '@nestjs/testing';
import { GolemsService } from './golems.service';

describe('GolemsService', () => {
  let service: GolemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GolemsService],
    }).compile();

    service = module.get<GolemsService>(GolemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
