import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/blog/dto/blog.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(input: CreateUserDto): Promise<any> {
    const result = await this.authService.validateUser(input);
    if (!result) {
      throw new UnauthorizedException();
    }
    return result;
  }
}