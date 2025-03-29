import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.tasksRepository.find()
  }

  create(task: Partial<Task>): Promise<Task> {
    const newTask = this.tasksRepository.create(task);
    return this.tasksRepository.save(newTask);
  }

  update(id: number, task: Partial<Task>): Promise<Task> {
    return this.tasksRepository.save({ id, ...task })
  }

  delete(id: number): Promise<void> {
    return this.tasksRepository.delete(id).then(() => undefined);
  }
}
