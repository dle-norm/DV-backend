import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CategoriesEntity } from './entities/categories.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getCategories(): Promise<CategoriesEntity[]> {
    return this.appService.findAll();
  }
}
