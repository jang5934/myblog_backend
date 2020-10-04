import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty()
  readonly c_subject: string;

  @ApiProperty()
  readonly hide_flag: number;
}

export class CreatePageDto {
  @ApiProperty()
  readonly page_url: string;

  @ApiProperty()
  readonly page_body: string;

  @ApiProperty()
  readonly sc_id: number;

  @ApiProperty()
  readonly hide_flag: number;
}

export class CreateSubCategoryDto {
  @ApiProperty()
  readonly sc_subject: string;

  @ApiProperty()
  readonly p_id: number;

  @ApiProperty()
  readonly hide_flag: number;
}

export class CreateUserDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly password: string;
}