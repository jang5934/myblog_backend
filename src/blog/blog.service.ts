import { Injectable } from '@nestjs/common';
import { Category, SubCategory, Page, User } from './entity/blog.entity';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto, CreateSubCategoryDto, CreatePageDto, CreateUserDto } from './dto/blog.dto';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository : Repository<Category>,
        @InjectRepository(SubCategory)
        private readonly subCategoryRepository : Repository<SubCategory>
    ){}

    public async getCategoryInfo(): Promise<Category[]> {

        const data = await this.categoryRepository
        .createQueryBuilder("category")
        .leftJoinAndSelect("category.subcategories","sub_category")
        .getMany();

        return data;
    }

    public async getPageInfo(id: number): Promise<SubCategory[] | null> {

        const data = await this.subCategoryRepository
        .createQueryBuilder("subcategory")
        .leftJoinAndSelect("subcategory.pages", "page")
        .where("subcategory.sc_id = :sc_id", {sc_id: id})
        .getMany();

        return data;
    }
}
