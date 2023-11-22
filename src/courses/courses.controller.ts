/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('cursos')
export class CoursesController {
    constructor(private readonly courseServices: CoursesService) { }

    @Get()
    findAll() {
        return this.courseServices.findAll()
    }

    /*@Get(':id')
    findOne(@Param('id') id: number) {
        console.log(id)
        const  course = this.courseServices.findOne(id)
        return {data: course}

    }
*/
    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log(id)
        return this.courseServices.findOne(id)

    }

    @HttpCode(200)
    @Post()
    create(@Body() body) {
        console.log(body)
        this.courseServices.create(body)
        return "Usuario criado com sucesso"
    }

    @Patch(':id')
    update(@Param('id') id: number) {
        return this.courseServices.findOne(id)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    remove(@Param(':id') id: number) {
        return this.courseServices.remove(id)
    }
}

