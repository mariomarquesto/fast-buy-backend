import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { VentaController } from './venta.controller';
import { ventaProviders } from './venta.provider';
import { VentaService } from './venta.service';

@Module({
  imports: [DatabaseModule],
  controllers: [VentaController],
  providers: [VentaService, ...ventaProviders],
})
export class VentaModule {}
