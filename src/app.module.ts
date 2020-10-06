import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogModule } from './blog/blog.module';
import { Category, SubCategory, Page, User } from './blog/entity/blog.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1234',
    database: 'myblog',
    entities: [Category, SubCategory, Page, User],
    synchronize: true,
  }),
  BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
