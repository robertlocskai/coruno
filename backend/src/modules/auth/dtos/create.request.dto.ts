import { IsEmail, IsNumber, IsString, MinLength } from "class-validator";

export class CreateRequestDto {
  @IsString()
  @MinLength(2)
  firstName: string;

  @IsString()
  @MinLength(2)
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsNumber()
  appRole: number;
}
