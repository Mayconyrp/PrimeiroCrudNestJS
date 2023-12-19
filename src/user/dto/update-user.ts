import { IsNumber, IsString } from 'class-validator'

export class CreateUserDTO {
    @IsString()
    readonly name: string
    
    @IsNumber()
    readonly idade: number


}