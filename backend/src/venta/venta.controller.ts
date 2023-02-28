import { Body, Controller, Get, Post } from '@nestjs/common';
import { IVentaDto } from 'src/models/venta.dto';
import { Venta } from 'src/models/venta.identity';
import { VentaService } from './venta.service';

@Controller('venta')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Get()
  getVentas(): Promise<Venta[]> {
    return this.ventaService.findAll();
  }

  @Post()
  createVenta(@Body() venta: IVentaDto): Promise<Venta> {
    return this.ventaService.createOne(venta);
  }
}
