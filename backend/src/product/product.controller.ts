import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { IProductDto } from 'src/models/product.dto';
import { Product } from 'src/models/product.entity';
import { ProductsService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getProducts(@Res({ passthrough: true }) res: Response): Promise<Product[]> {
    return this.productService.findAll(res);
  }

  @Post()
  createProduct(@Body() product: IProductDto): Promise<Product> {
    return this.productService.createOne(product);
  }
}
