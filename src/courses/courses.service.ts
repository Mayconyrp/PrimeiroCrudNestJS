import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Course } from './entities/courses.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './entities/tags.entity';
import { CreateCourseDTO } from './dto/create-course.dto';
//import { UpdateCourseDTO} from './dto/update-course.dto'
@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,

        @InjectRepository(Tag)
        private readonly tagRepository: Repository<Tag>
    ) { }

    async findAll() {
        return this.courseRepository.find({
            relations: ['tags'],
        })
    }
    async findOne(id: number) {
        const course = await this.courseRepository.findOne({
            where: { id: id },
            relations:['tags']
        })
        if (!course) {
            throw new NotFoundException(`Course ID ${id} não encontrado.`)
        }
        return course
    }

    async create(createCourseDTO: CreateCourseDTO) {
        const tags = await Promise.all(
            createCourseDTO.tags.map(name => this.preloadTagByName(name)),
        )
        const course = this.courseRepository.create({
            ...createCourseDTO,
            tags
        })
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

    private async preloadTagByName(name: string): Promise<Tag> {
        const tag = await this.tagRepository.findOne({ where: { name } });
        if (tag) {
            return tag;
        }
        return this.tagRepository.create({ name });
    }

}
