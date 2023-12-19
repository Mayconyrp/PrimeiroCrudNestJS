
import { Column, Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { Tag } from "./tags.entity";

@Entity('cursos')
export class Course {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    descricao: string;
    
    @JoinTable()    
    @ManyToMany(()=> Tag, tag => tag.courses , { 
        cascade: true})
    tags: Tag[];


}