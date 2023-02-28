import { Injectable, Inject } from '@nestjs/common';
import { IVentaItemDto } from 'src/models/venta-item.dto';
import { VentaItem } from 'src/models/venta-item.identity';

@Injectable()
export class VentaItemService {
  constructor(
    @Inject('VENTA_ITEM_REPOSITORY')
    private ventaItemRepository: typeof VentaItem,
  ) {}

  async findAll(): Promise<VentaItem[]> {
    return this.ventaItemRepository.findAll<VentaItem>();
  }

  async createOne(ventaItem: IVentaItemDto): Promise<VentaItem> {
    const { productoId, ventaId } = ventaItem;

    return this.ventaItemRepository.create({
      productoId,
      ventaId,
    });
  }
}
