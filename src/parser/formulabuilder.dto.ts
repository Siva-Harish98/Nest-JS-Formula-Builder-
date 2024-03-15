import { Type } from "class-transformer";
import { IsArray, IsBoolean, IsInt, IsNotEmpty, IsNumber, IsObject, IsString, ValidateNested } from "class-validator";


export class Certificateobj{
    @IsNotEmpty()
    @IsString()
    certificateName : String


    @IsNotEmpty()
    @IsBoolean()
    isThat: Boolean

}


export class LandMark{
    @IsString()
    @IsNotEmpty()
    nearPlace : String
}


export class address{
    @IsInt()
    @IsNotEmpty()
    doorno : Number

    @IsString()
    @IsNotEmpty()
    streetName: String

    @IsObject()
    @IsNotEmpty()
    @ValidateNested()
    @Type(() => LandMark)
    landmark : LandMark

    
}





export class Subrequest {
    @IsString()
    @IsNotEmpty()
    name: String

    @IsObject()
    @IsNotEmpty()
    @ValidateNested()
    @Type(()=>address)
    Address: address

    @IsArray()
    @IsNotEmpty()
    RollNumber: (String | Number)[]


    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>Certificateobj)
    Certificate : Certificateobj[]
}

export class IncomingRequest {
    @IsObject()
    @IsNotEmpty()
    @ValidateNested({each:true})
    @Type(()=>Subrequest)
    data: Subrequest
    
    }


