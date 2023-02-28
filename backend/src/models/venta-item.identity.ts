import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Product } from './product.entity';
import { Venta } from './venta.identity';

@Table
export class VentaItem extends Model {
  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;

  @ForeignKey(() => Product)
  @Column
  productoId: number;

  @BelongsTo(() => Product)
  producto: Product;

  @ForeignKey(() => Venta)
  @Column
  ventaId: number;

  @BelongsTo(() => Venta)
  venta: Venta;
}
