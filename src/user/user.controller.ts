/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user';

@Controller('usuarios')
export class UserController {
    constructor(private readonly userServices: UserService) { }

    @Get()
    findAll(){
        return this.userServices.findAll()
    }
    
    @HttpCode(200)
    @Post()
    async create(@Body() createUserDTO: CreateUserDTO) {
        const createdUser = await this.userServices.create(createUserDTO);
        return {
            message: 'Usuário criado com sucesso',
            user: createdUser,
        };
    }
}
