import { Module, forwardRef } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { EnrollmentModule } from '../enrollment/enrollment.module';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService],
  imports: [forwardRef(() => EnrollmentModule)],
  exports: [NotificationService],
})
export class NotificationModule {}
