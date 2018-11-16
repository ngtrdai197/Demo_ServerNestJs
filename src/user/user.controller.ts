import { Controller, Get, Post, Body, Req, HttpStatus, Res, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './user.service';
import { User as UserInterface } from '../interfaces/user.interface';
import { CreateUserDto } from 'dto/create-user.dto';

@Controller('user')
export class UserControlleer {
    constructor(private readonly usersService: UsersService) { }

    @Get('/api/getall')
    async findAll(): Promise<UserInterface[]> {
        return this.usersService.findAll();
    }

    @Get('/api/get/:id')
    async findById(@Param('id') id, @Res() res, @Body() createUserDto: CreateUserDto): Promise<UserInterface> {
        const findUser = await this.usersService.findById(id);
        return res.status(HttpStatus.OK).json({
            message: 'Tìm tài khoản thành công',
            data: findUser,
        });
    }

    @Post('/api/create')
    async create(@Res() res, @Body() createUserDto: CreateUserDto): Promise<UserInterface> {
        const createdUser = await this.usersService.create(createUserDto);
        return res.status(HttpStatus.OK).json({
            message: 'Tạo tài khoản thành công',
            data: createdUser,
        });
    }

    @Delete('/api/delete/:id')
    async deleteById(@Param('id') id, @Res() res, @Body() createUserDto: CreateUserDto): Promise<UserInterface> {
        const findUser = await this.usersService.deleteById(id);
        return res.status(HttpStatus.OK).json({
            message: 'Xóa tài khoản thành công',
            data: findUser,
        });
    }
    @Put('/api/update/:id')
    async update(@Param('id') id, @Res() res, @Body() updateUserDto: CreateUserDto) {
        const findUser = await this.usersService.updateById(id, updateUserDto);
        return res.status(HttpStatus.OK).json({
            message: 'Cập nhật thành công',
            data: updateUserDto,
        });
    }
}
