import { IsNumber, IsString } from 'class-validator'

export class CreateUserDTO {
    
    @IsString()
    readonly nome: string
    
    @IsNumber()
    readonly idade: number


}