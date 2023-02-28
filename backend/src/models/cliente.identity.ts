import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  HasMany,
} from 'sequelize-typescript';
import { Venta } from './venta.identity';

@Table
export class Cliente extends Model {
  @Column
  name: string;

  @Column
  lastName: string;

  @Column
  phoneNumber: string;

  @Column
  dni: string;

  @Column
  address: string;

  @Column
  zipCode: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;

  @HasMany(() => Venta)
  ventas: Venta[];
}
