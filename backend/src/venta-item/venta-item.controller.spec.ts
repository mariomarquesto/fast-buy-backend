import { Test, TestingModule } from '@nestjs/testing';
import { VentaItemController } from './venta-item.controller';

describe('VentaItemController', () => {
  let controller: VentaItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VentaItemController],
    }).compile();

    controller = module.get<VentaItemController>(VentaItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
