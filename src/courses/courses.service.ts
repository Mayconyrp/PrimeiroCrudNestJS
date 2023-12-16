/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/courses.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
//import { UpdateCourseDTO} from './dto/update-course.dto'
@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,
    ) { }

    async findAll() {
        return this.courseRepository.find()
    }
    async findOne(id: number) {
        const course = await this.courseRepository.findOne({
            where: { id: id },
        })
        if (!course) {
            throw new NotFoundException(`Course ID ${id} não encontrado.`)
        }
        return course
    }

    create(createCourseDTO: any) {
        const course = this.courseRepository.create(createCourseDTO)
        return this.courseRepository.save(course), "Usuario Criado com sucesso: " + course
    }

    async update(id: number, UpdateCourseDTO: any) {
        const course = await this.courseRepository.preload({
            ...UpdateCourseDTO,
            id,
        })
        if (!course) {
            throw new NotFoundException(`Course ID:${id} não encontrado`)
        }
        return this.courseRepository.save(course)
    }

    async remove(id: number) {
        const course = await this.courseRepository.findOne({
            where: { id },

        })
        if (!course) {
            throw new NotFoundException(`Course ID:${id} não encontrado`)

        }
        return this.courseRepository.remove(course)
    }

}
