import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ICategoryDto } from 'src/models/category.dto';
import { Category } from 'src/models/category.entity';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getCategories(
    @Res({ passthrough: true }) res: Response,
  ): Promise<Category[]> {
    const result = this.categoryService.findAll().then((data) => {
      if (data) {
        const { rows, count } = data;

        res.set('Access-Control-Expose-Headers', 'X-Total-Count');
        res.set('X-Total-Count', count.toString());

        return rows;
      }
    });

    return result;
  }

  @Post()
  createCategory(@Body() category: ICategoryDto): Promise<Category> {
    return this.categoryService.createOne(category);
  }
}
