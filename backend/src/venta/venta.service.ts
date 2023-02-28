import { Injectable, Inject } from '@nestjs/common';
import { IVentaDto } from 'src/models/venta.dto';
import { Venta } from 'src/models/venta.identity';

@Injectable()
export class VentaService {
  constructor(
    @Inject('VENTA_REPOSITORY')
    private ventaRepository: typeof Venta,
  ) {}

  async findAll(): Promise<Venta[]> {
    return this.ventaRepository.findAll<Venta>();
  }

  async createOne(venta: IVentaDto): Promise<Venta> {
    const { clienteId, totalPrice, status } = venta;

    return this.ventaRepository.create({
      clienteId,
      totalPrice,
      status,
    });
  }
}
