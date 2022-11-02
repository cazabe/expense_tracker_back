import { Controller, Post, Body } from '@nestjs/common';
import { UserDto } from './dto/user_dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userSErvice: UsersService) { }
    @Post()
    createUser(@Body() newUser: UserDto) {
        return this.userSErvice.createUser(newUser);
    }
}
