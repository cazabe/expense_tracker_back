import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserDto } from './dto/user_dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userSErvice: UsersService) { }
    @Get()
    getUsers(): Promise<User[]> {
        return this.userSErvice.getUser();
    }
    @Post()
    createUser(@Body() newUser: UserDto) {
        return this.userSErvice.createUser(newUser);
    }
}
