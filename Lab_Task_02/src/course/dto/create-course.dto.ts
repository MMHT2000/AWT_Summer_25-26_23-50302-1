import { IsString, IsNotEmpty, IsNumber, IsOptional, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCourseDto {
    @IsString()
    @IsNotEmpty()
    name: string = '';

    @IsString()
    @IsNotEmpty()
    code: string = '';

    @IsString()
    @IsNotEmpty()
    instructor: string = '';

    @Type(() => Number)
    @IsNumber()
    @Min(1)
    @Max(6)
    credits: number = 0;

    @IsOptional()
    @IsString()
    description?: string = '';
}