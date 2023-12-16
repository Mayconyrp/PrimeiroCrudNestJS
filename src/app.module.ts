import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CoursesModule, DatabaseModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
