/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Course } from 'src/courses/entities/courses.entity';
import { User } from 'src/user/entities/user.entity';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306, // Porta correta do MySQL
    username: 'root',
    password: 'maycon',
    database: 'curso_nestj',
    entities: [Course,User], // Verifique se as entidades estão corretamente definidas
    synchronize: true
};

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async () => ({
                ...dataSourceOptions, // Use as opções do banco de dados aqui
                autoLoadEntities: true, // Carregar automaticamente entidades do TypeORM
            }),
        }),
    ],
})
export class DatabaseModule { }
