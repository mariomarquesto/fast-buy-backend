import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { VentaItemController } from './venta-item.controller';
import { ventaItemProviders } from './venta-item.provider';
import { VentaItemService } from './venta-item.service';

@Module({
  imports: [DatabaseModule],
  controllers: [VentaItemController],
  providers: [VentaItemService, ...ventaItemProviders],
})
export class VentaItemModule {}
