/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cursos')
export class Course {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    descricao: string;
    @Column('json',{nullable: true})
    tags: string[];
}