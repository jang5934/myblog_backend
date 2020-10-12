import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Category, SubCategory, Page } from '../entity/blog.entity';

export class CreateCategoryDto {
  @ApiProperty()
  readonly c_subject: string;

  @ApiProperty()
  readonly hide_flag: number;
  
  @ApiProperty()
  readonly subcategories: SubCategory[];
}

export class CreateSubCategoryDto {
  @ApiProperty()
  readonly sc_subject: string;

  @ApiProperty()
  readonly hide_flag: number;

  @ApiProperty()
  readonly c_id: Category;

  @ApiProperty()
  readonly pages: Page[];
}

export class CreatePageDto {
  @ApiProperty()
  readonly page_body: string;

  @ApiProperty()
  readonly hide_flag: number;

  @ApiProperty()
  readonly sc_id: SubCategory;
}

export class CreateUserDto {
  @ApiProperty()
  @IsString() // This decorator has been added since the typical warning message appears in command prompt.
  readonly username: string;

  @ApiProperty()
  @IsString() // This decorator has been added since the typical warning message appears in command prompt.
  readonly password: string;
}