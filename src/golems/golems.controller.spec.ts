import { Test, TestingModule } from '@nestjs/testing';
import { GolemsController } from './golems.controller';
import { GolemsService } from './golems.service';

describe('GolemsController', () => {
  let controller: GolemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GolemsController],
      providers: [GolemsService],
    }).compile();

    controller = module.get<GolemsController>(GolemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
