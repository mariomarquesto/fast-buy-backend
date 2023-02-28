import { Body, Controller, Get, Post } from '@nestjs/common';
import { IVentaItemDto } from 'src/models/venta-item.dto';
import { VentaItem } from 'src/models/venta-item.identity';
import { VentaItemService } from './venta-item.service';

@Controller('venta-item')
export class VentaItemController {
  constructor(private readonly ventaItemService: VentaItemService) {}

  @Get()
  getVentaItems(): Promise<VentaItem[]> {
    return this.ventaItemService.findAll();
  }

  @Post()
  createVentaItem(@Body() ventaItem: IVentaItemDto): Promise<VentaItem> {
    return this.ventaItemService.createOne(ventaItem);
  }
}
