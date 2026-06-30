import { Injectable } from '@nestjs/common';

@Injectable()
export class CourseService {
    getAllCourses(): string {
        return 'Get all Courses from service';
    }

    getCourseById(id: string): string {
        return `Get Course with id ${id} from service`;
    }

    createCourse(): string {
        return `Create Course from service`;
    }

    updateCourse(id: string): string {
        return `Update Course with id ${id} from service`;
    }

    deleteCourse(id: string): string {
        return `Delete Course with id ${id} from service`;
    }
}
