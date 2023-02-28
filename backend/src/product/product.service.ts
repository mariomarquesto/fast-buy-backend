import { Injectable, Inject } from '@nestjs/common';
import { Response } from 'express';
import { Category } from 'src/models/category.entity';
import { IProductDto } from 'src/models/product.dto';
import { Product } from 'src/models/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: typeof Product,
  ) {}

  async findAll(res: Response): Promise<Product[]> {
    const result = await this.productRepository.findAndCountAll<Product>({
      include: [{ model: Category, required: true }],
    });

    const { rows, count } = result;

    res.set('Access-Control-Expose-Headers', 'X-Total-Count');
    res.set('X-Total-Count', count.toString());

    return rows;
  }

  async createOne(product: IProductDto): Promise<Product> {
    const { categoryId, name, description, price, images } = product;

    return this.productRepository.create({
      categoryId,
      name,
      description,
      price,
      images,
    });
  }
}
