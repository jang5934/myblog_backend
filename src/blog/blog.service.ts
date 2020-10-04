import { Injectable } from '@nestjs/common';
import { Category, SubCategory, Page, User } from './entity/blog.entity';
import { Repository, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto, CreateSubCategoryDto, CreatePageDto, CreateUserDto } from './dto/blog.dto';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(Category)
        @InjectRepository(SubCategory)
        @InjectRepository(Page)
        @InjectRepository(User)
        private readonly categoryRepository : Repository<Category>,
        private readonly subCategoryRepository : Repository<SubCategory>,
        private readonly pageRepository : Repository<Page>,
        private readonly userRepository : Repository<User>,
    ){}

// Category method
    
    public async findAllCategory(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    public async findCategoryById(c_id: number):Promise<Category | null> {
        return await this.categoryRepository.findOneOrFail(c_id);
    }

    public async createCategory(category: CreateCategoryDto): Promise<Category> {
        return await this.categoryRepository.save(category);
    }

    public async updateCategory(
        c_id: number,
        newValue: CreateCategoryDto,
    ): Promise<Category | null> {
        const category = await this.categoryRepository.findOneOrFail(c_id);

        if(!category.c_id)
            console.error("This row doesn't exist!");
        await this.categoryRepository.update(c_id, newValue);
        return await this.categoryRepository.findOne(c_id);
    }

    public async deleteCategory(c_id: number): Promise<DeleteResult> {
        return await this.categoryRepository.delete(c_id);
    }

// Sub category method

    public async findAllSubCategory(): Promise<SubCategory[]> {
        return await this.subCategoryRepository.find();
    }

    public async findSubCategoryById(sc_id: number):Promise<SubCategory | null> {
        return await this.subCategoryRepository.findOneOrFail(sc_id);
    }

    public async createSubCategory(subCategory: CreateSubCategoryDto): Promise<SubCategory> {
        return await this.subCategoryRepository.save(subCategory);
    }

    public async updateSubCategory(
        sc_id: number,
        newValue: CreateSubCategoryDto,
    ): Promise<SubCategory | null> {
        const subCategory = await this.subCategoryRepository.findOneOrFail(sc_id);

        if(!subCategory.sc_id)
            console.error("This row doesn't exist!");
        await this.subCategoryRepository.update(sc_id, newValue);
        return await this.subCategoryRepository.findOne(sc_id);
    }

    public async deleteSubCategory(sc_id: number): Promise<DeleteResult> {
        return await this.subCategoryRepository.delete(sc_id);
    }

// Page method

    public async findAllPage(): Promise<Page[]> {
        return await this.pageRepository.find();
    }

    public async findPageById(p_id: number):Promise<Page | null> {
        return await this.pageRepository.findOneOrFail(p_id);
    }

    public async createPage(page: CreatePageDto): Promise<Page> {
        return await this.pageRepository.save(page);
    }

    public async updatePage(
        p_id: number,
        newValue: CreatePageDto,
    ): Promise<Page | null> {
        const page = await this.pageRepository.findOneOrFail(p_id);

        if(!page.p_id)
            console.error("This row doesn't exist!");
        await this.pageRepository.update(p_id, newValue);
        return await this.pageRepository.findOne(p_id);
    }

    public async deletePage(p_id: number): Promise<DeleteResult> {
        return await this.pageRepository.delete(p_id);
    }

// User method

    public async findAllUser(): Promise<User[]> {
        return await this.userRepository.find();
    }

    public async findUserById(p_id: number):Promise<User | null> {
        return await this.userRepository.findOneOrFail(p_id);
    }

    public async createUser(user: CreateUserDto): Promise<User> {
        return await this.userRepository.save(user);
    }

    public async updateUser(
        u_id: number,
        newValue: CreateUserDto,
    ): Promise<User | null> {
        const user = await this.userRepository.findOneOrFail(u_id);

        if(!user.u_id)
            console.error("This row doesn't exist!");
        await this.userRepository.update(u_id, newValue);
        return await this.userRepository.findOne(u_id);
    }

    public async deleteUser(u_id: number): Promise<DeleteResult> {
        return await this.userRepository.delete(u_id);
    }

}
