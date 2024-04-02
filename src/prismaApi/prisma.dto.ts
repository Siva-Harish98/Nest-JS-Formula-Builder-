import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class tableCreation {
    @IsString()
    @IsNotEmpty()
    tableName : String
}