import { Module, forwardRef } from '@nestjs/common';
import { EnrollmentService } from './enrollment.service';
import { EnrollmentController } from './enrollment.controller';
import { CourseModule } from '../course/course.module';
import { NotificationModule} from '../notification/notification.module';


@Module({
  controllers: [EnrollmentController],
  providers: [EnrollmentService],
  imports: [CourseModule, forwardRef(() => NotificationModule)],
  exports: [EnrollmentService],
})
export class EnrollmentModule {}
