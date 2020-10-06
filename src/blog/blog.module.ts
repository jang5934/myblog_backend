import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category, SubCategory, Page, User } from './entity/blog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, SubCategory, Page, User])],
  controllers: [BlogController],
  providers: [BlogService]
})
export class BlogModule {}
