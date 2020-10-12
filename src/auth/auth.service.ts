import { Injectable } from '@nestjs/common';
import { BlogService } from 'src/blog/blog.service';
import { CreateUserDto } from 'src/blog/dto/blog.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private blogService: BlogService,
    private jwtService: JwtService
    ) {}

  async validateUser(input: CreateUserDto): Promise<any> {
    if(await this.blogService.checkUser(input))
      return input;
    else
      return null;
  }
  
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}