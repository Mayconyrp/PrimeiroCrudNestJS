/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Put, Post } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-course.dto';
import { UpdateCourseDTO } from './dto/update-course.dto'

@Controller('cursos')
export class CoursesController {
    constructor(private readonly courseServices: CoursesService) { }

    @Get()
    findAll() {
        return this.courseServices.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log(id)
        return this.courseServices.findOne(id)

    }

    @HttpCode(200)
    @Post()

    create(@Body() createCourseDTO: CreateCourseDTO) {
        this.courseServices.create(createCourseDTO)
        return "Usuario criado com sucesso"
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCourseDTO: UpdateCourseDTO) {
        return this.courseServices.update(+id, updateCourseDTO);
    }


    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.courseServices.remove(id)
    }
}

