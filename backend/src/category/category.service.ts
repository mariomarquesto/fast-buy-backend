import { Injectable, Inject } from '@nestjs/common';
import { ICategoryDto } from 'src/models/category.dto';
import { Category } from 'src/models/category.entity';
import { IResult } from 'src/models/result';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CATEGORY_REPOSITORY')
    private categoryRepository: typeof Category,
  ) {}

  async findAll(): Promise<IResult<Category>> {
    return await this.categoryRepository.findAndCountAll<Category>();
  }

  async createOne(category: ICategoryDto): Promise<Category> {
    const { name } = category;

    return this.categoryRepository.create({
      name,
    });
  }
}
