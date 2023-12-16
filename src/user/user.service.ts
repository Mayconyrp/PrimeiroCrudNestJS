/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) {}
    
    async findAll() {
        return this.userRepository.find()
    }
    
    create(createUserDTO: any) {
        const user = this.userRepository.create(createUserDTO)
        return this.userRepository.save(user)
    }
    

}
