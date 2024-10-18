import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class AuthDto{
    @IsEmail()
    @IsNotEmpty()
    email: string;
    //cc
    @IsString()
    @IsNotEmpty()
    password: string;
}