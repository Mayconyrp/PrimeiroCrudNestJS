/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDTO } from './create-course.dto';

export class UpdateCourseDTO extends PartialType(CreateCourseDTO) {
   readonly name?: string
   readonly descricao?: string

   readonly tags?: string[]    
}