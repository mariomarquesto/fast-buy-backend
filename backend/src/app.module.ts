import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { productProviders } from './product/product.provider';
import { ProductsService } from './product/product.service';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { categoryProviders } from './category/category.provider';
import { VentaController } from './venta/venta.controller';
import { VentaService } from './venta/venta.service';
import { VentaItemController } from './venta-item/venta-item.controller';
import { ventaProviders } from './venta/venta.provider';
import { VentaItemService } from './venta-item/venta-item.service';
import { ventaItemProviders } from './venta-item/venta-item.provider';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';
import { clienteProviders } from './cliente/cliente.provider';
import { HealthzController } from './healthz/healthz.controller';

@Module({
  imports: [ProductModule],
  controllers: [
    AppController,
    ProductController,
    CategoryController,
    VentaController,
    VentaItemController,
    ClienteController,
    HealthzController,
  ],
  providers: [
    AppService,
    ProductsService,
    ...productProviders,
    CategoryService,
    ...categoryProviders,
    VentaService,
    ...ventaProviders,
    VentaItemService,
    ...ventaItemProviders,
    ClienteService,
    ...clienteProviders,
  ],
})
export class AppModule {}
