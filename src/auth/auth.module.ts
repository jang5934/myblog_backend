import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { BlogModule } from 'src/blog/blog.module';
import { BlogService } from 'src/blog/blog.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category, SubCategory, Page, User } from '../blog/entity/blog.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [BlogModule,
    PassportModule,
    TypeOrmModule.forFeature([Category, SubCategory, Page, User]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
