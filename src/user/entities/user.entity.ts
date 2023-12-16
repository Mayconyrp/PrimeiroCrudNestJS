/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('usuarios')
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nome:string;
    @Column()
    idade: number;

}
    