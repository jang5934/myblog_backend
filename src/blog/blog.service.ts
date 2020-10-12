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
        private readonly subCategoryRepository : Repository<SubCategory>,
        @InjectRepository(Page)
        private readonly pageRepository : Repository<Page>,
        @InjectRepository(User)
        private readonly userRepository : Repository<User>,
    ){}

    public async getCategoryInfo(): Promise<Category[]> {

        const data = await this.categoryRepository
        .createQueryBuilder("category")
        .leftJoinAndSelect("category.subcategories","sub_category")
        .getMany();

        return data;
    }

    public async getPageInfo(id: number): Promise<SubCategory| null> {

        const data = await this.subCategoryRepository
        .createQueryBuilder("subcategory")
        .leftJoinAndSelect("subcategory.pages", "page")
        .where("subcategory.sc_id = :sc_id", {sc_id: id})
        .getOne();

        return data;
    }

    public async checkUser(input: CreateUserDto) : Promise<number | null> {
        const result = await this.userRepository
        .createQueryBuilder("user")
        .where("user.name = :name", {name: input.username})
        .andWhere("user.password = :password", {password: input.password})
        .getCount();

        return result;
    }

    public async createCategory(category: CreateCategoryDto): Promise<Category> {
        return await this.categoryRepository.save(category);
    }

    public async createSubCategory(subcategory: CreateSubCategoryDto): Promise<SubCategory> {
        return await this.subCategoryRepository.save(subcategory);
    }

    public async createPage(page: CreatePageDto): Promise<Page> {
        return await this.pageRepository.save(page);
    }

    public async createUser(user: CreateUserDto): Promise<User> {
        return await this.userRepository.save(user);
    }


}
