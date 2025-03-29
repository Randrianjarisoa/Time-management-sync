import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }

  @Post()
  create(@Body() task: Partial<Task>): Promise<Task> {
    return this.taskService.create(task);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() task: Partial<Task>): Promise<Task> {
    return this.taskService.update(+id, task);
  }

  @Delete('id')
  delete(@Param('id') id: string): Promise<void> {
    return this.taskService.delete(+id);
  }

  @Post('sync')
  async sync(@Body() tasks: Task[]) : Promise<Task[]> {
    const existingTasks = await this.taskService.findAll();
    const mergedTasks = this.mergeTasks(existingTasks, tasks);
    for (const task of mergedTasks) {
      await this.taskService.update(task.id, task) || this.taskService.create(task);
    }
    return this.taskService.findAll()
  }

  private mergeTasks(existing: Task[], incoming: Task[]): Task[] {
    const merged = [ ...existing];
    incoming.forEach(inc => {
      const existingTask = merged.find(t => t.id === inc.id)
      if (!existingTask) {
        merged.push(inc);
      } else if (new Date(inc.lastModified) > new Date(existingTask.lastModified)) {
        Object.assign(existingTask, inc);
      }
    });
    return merged
  }
}
