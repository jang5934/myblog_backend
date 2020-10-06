import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Category, SubCategory, Page, User } from './entity/blog.entity';
import { CreateCategoryDto, CreateSubCategoryDto, CreateUserDto, CreatePageDto } from './dto/blog.dto';

@Controller('blog')
export class BlogController {

    constructor(private readonly blogService : BlogService) {}

    @Get('allCategories')
    getAllCategories(): Promise<Category[]> {
        return this.blogService.getCategoryInfo();
    }

    @Get('pagesOfsubCat:id')
    getOneColumn(@Param('id') id): Promise<SubCategory[]> {
        return this.blogService.getPageInfo(id);
    }
}
