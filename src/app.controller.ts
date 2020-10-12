import { Controller, Request, Post, UseGuards, Get, Body, ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { CreateUserDto } from './blog/dto/blog.dto';
import { IsArray, IsString, IsOptional } from 'class-validator';

export class SomeModelDTO {
  @IsString()
  name: string;
  
  @IsString()
  password: string;

  @IsArray()
  @IsOptional()
  arr: string[];
}

@Controller()
export class AppController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Body(new ValidationPipe) body: SomeModelDTO, @Request() req) {
      return this.authService.login(req.user);
    }
    
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}