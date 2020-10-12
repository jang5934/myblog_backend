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

  async validateUser(username: string, password: string): Promise<CreateUserDto> {
    const input = {username : username, password :  password};
    const result = await this.blogService.checkUser(input);
    
    if(result) {
      return input;
    }
    return null;
  }
  
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}