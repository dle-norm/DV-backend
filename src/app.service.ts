import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesEntity } from './entities/categories.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(CategoriesEntity)
    private entityRepository: Repository<CategoriesEntity>,
  ) {}

  async findAll(): Promise<CategoriesEntity[]> {
    return await this.entityRepository.find();
  }
}
