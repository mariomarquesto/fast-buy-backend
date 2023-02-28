import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { productProviders } from 'src/product/product.provider';
import { ProductController } from './product.controller';
import { ProductsService } from './product.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductsService, ...productProviders],
})
export class ProductModule {}
