import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from 'src/task/task.controller';
import { Task } from 'src/task/task.entity';
import { TaskService } from 'src/task/task.service';
import { TasksGateway } from './tasks.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TaskService, TasksGateway],
  controllers: [TaskController]
})
export class TasksModule {}
