import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserDto } from 'dto/create-user.dto';
import { User } from 'interfaces/user.interface';

@Injectable()

export class UsersService {

    constructor(
        @Inject('UserModelToken')
        private readonly userModel: Model<User>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }
    async findById(id): Promise<User>{
        return await this.userModel.findById(id).exec();
    }

    async deleteById(id): Promise<User> {
        return await this.userModel.findByIdAndRemove(id).exec();
    }
    async updateById(id, user: CreateUserDto): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, user).exec();
    }

}