import { Module } from '@nestjs/common';
import { UserControlleer } from './user.controller';
import { UsersService } from './user.service';
import { DatabaseModule } from 'config/database.module';
import { UserProviders } from './user.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [UserControlleer],
    providers: [UsersService, ...UserProviders],
})
export class UserModule { }