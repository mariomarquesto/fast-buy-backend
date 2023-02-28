import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Cliente } from './cliente.identity';
import { VentaItem } from './venta-item.identity';

@Table
export class Venta extends Model {
  @Column
  totalPrice: string;

  @Column
  status: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;

  @ForeignKey(() => Cliente)
  @Column
  clienteId: number;

  @BelongsTo(() => Cliente)
  cliente: Cliente;

  @HasMany(() => VentaItem)
  ventaItems: VentaItem[];
}
