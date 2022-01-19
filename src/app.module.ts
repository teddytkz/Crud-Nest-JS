import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './users/user.controller';
import { User } from './users/user.entity';
import { UserService } from './users/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '192.168.10.13',
      port: 3306,
      username: 'teddy',
      password: 'Teddy123#',
      database: 'nest_simple_api',
      autoLoadEntities: true,
      synchronize: true
    }),
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule { }
