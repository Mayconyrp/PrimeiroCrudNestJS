import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./courses.entity";

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    courses:Course[]
}