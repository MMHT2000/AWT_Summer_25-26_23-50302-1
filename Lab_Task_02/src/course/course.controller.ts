import { BadGatewayException, BadRequestException, Body, Controller, Delete, Get, Param, Patch, Post, Put, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CourseService } from './course.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('course')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Get()
    getAllCourses(): any {
        return this.courseService.getAllCourses();
    }

    @Get(':id')
    getCourseById(@Param('id') id: string): any {
        return this.courseService.getCourseById(id);
    }

    @Post()
    createCourse(@Body() dto: CreateCourseDto): any {
        return this.courseService.createCourse(dto);
    }

    @Put(':id')
    updateCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto): any {
        return this.courseService.updateCourse(id, dto);
    }

    @Patch(':id')
    patchCourse(@Param('id') id: string, @Body() dto: UpdateCourseDto): any {
        return this.courseService.patchCourse(id, dto);
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: string): any {
        return this.courseService.deleteCourse(id);
    }

    @Post(':id/upload')
    @UseInterceptors(
        FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now();
                cb(null, `${uniqueSuffix}-${file.originalname}`);
            },
        }),
        fileFilter: (req, file, cb) => {
            const allowedExtensions = ['.pdf', '.doc', '.docx', '.ppt', '.pptx'];
            const fileExtension = extname(file.originalname).toLowerCase();
            if (allowedExtensions.includes(fileExtension)) {
                return cb(
                    new BadGatewayException('Invalid file type. Only PDF, DOC, DOCX, PPT, and PPTX files are allowed.'),
                    false,
                );
            }
            cb(null, true);
        },
        limits: { fileSize: 5 * 1024 * 1024 },
    }),
)
uploadCourseMaterial(
    @Param('id') id: string, 
    @UploadedFile() file: Express.Multer.File
) {
    if (!file) {
        throw new BadRequestException('No file uploaded.');
    }
    return this.courseService.uploadCourseMaterial(id, file);
}
    
}
