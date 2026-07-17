import {
  Controller,Get, Post, Delete, Body, Param} from '@nestjs/common';

import { CoursesService } from './courses.service';
import { Course } from './entities/course.entity';


@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}


  @Post()
  create (@Body() body) {
    return this.coursesService.create(body);

  }



  @Get('name/:name')

  findByName(@Param('name') name: string) {
    return this.coursesService.findByName(name);
  }

  @Delete(':id')
  remove(@Param('id')id: number) {
    return this.coursesService.remove(id);
  }
}
