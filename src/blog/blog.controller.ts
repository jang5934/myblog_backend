import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Category, SubCategory, Page, User } from './entity/blog.entity';
import { CreateCategoryDto, CreateSubCategoryDto, CreateUserDto, CreatePageDto } from './dto/blog.dto';

@Controller('blog')
export class BlogController {

    constructor(private readonly blogService : BlogService) {}

    // Get category informations in json format
    @Get('allCategories')
    getAllCategories(): Promise<Category[]> {
        return this.blogService.getCategoryInfo();
    }

    // get page informations of selected subcategory at index : id
    @Get('pagesOfsubCat:id')
    getOneColumn(@Param('id') id): Promise<SubCategory> {
        return this.blogService.getPageInfo(id);
    }

    // check whether the inserted user is exist in DB or not.
    @Post('login')
    async checkUser(@Body() post: CreateUserDto): Promise<number> {
        return this.blogService.checkUser(post);
    }

    // create user according to received data(body data)
    @Post('sign')
    async createUser(@Body() post: CreateUserDto): Promise<User> {
        return this.blogService.createUser(post);
    }

    // create new category
    @Post('addCategory')
    async addOneCategory(@Body() post: CreateCategoryDto) : Promise<Category>{
        return this.blogService.createCategory(post);
    }

    // create new subcategory
    // parent category index(= category index) should be contained in body data.
    @Post('addSubCategory')
    async addOneSubCategory(@Body() post: CreateSubCategoryDto) : Promise<SubCategory>{
        return this.blogService.createSubCategory(post);
    }

    // create new page
    // parent category index(= sub category index) should be contained in body data.
    @Post('addPage')
    async addOnePage(@Body() post: CreatePageDto) : Promise<Page>{
        return this.blogService.createPage(post);
    }

    // create new user.
    // Adding new user. Some auth process like e-mail validation isn't developed yet.
    // if you need it, maybe you should build or setup e-mailing server. 
    @Post('addUser')
    async addOneUser(@Body() post: CreateUserDto) : Promise<User>{
        return this.blogService.createUser(post);
    }

    
}
