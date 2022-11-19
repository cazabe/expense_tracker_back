import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserDto } from './dto/user_dto';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    createUser(user: UserDto) {
        const newUser = this.userRepository.create(user)
        return this.userRepository.save(newUser)
    }
    getUser() {
        return this.userRepository.find();
    }
}
