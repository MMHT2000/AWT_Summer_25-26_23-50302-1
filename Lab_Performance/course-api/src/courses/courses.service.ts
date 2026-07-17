import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

    constructor(
        @InjectRepository(Course)
        private courseRepository: 
        Repository<Course>,
    ) {}

    create(course: Course): Promise<Course> {
        return this.courseRepository.save(course);
    }

    findByName(name: string) {
        return this.courseRepository.find({
            where: {
                Course_name: ILike(`%${name}%`),
            },
        });
    }

    remove(id: number) {
        return this.courseRepository.delete(id);

    }

    


}
