import { Sequelize } from 'sequelize-typescript';
import { Category } from 'src/models/category.entity';
import { Cliente } from 'src/models/cliente.identity';
import { Product } from 'src/models/product.entity';
import { VentaItem } from 'src/models/venta-item.identity';
import { Venta } from 'src/models/venta.identity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'fastbuy',
      });
      sequelize.addModels([Product, Category, Venta, VentaItem, Cliente]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
