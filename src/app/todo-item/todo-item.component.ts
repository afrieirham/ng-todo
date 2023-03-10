import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TodoService } from '../services/todo.service';
import { Task } from '../types/task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() task?: Task;

  @Input() tasks: Task[] = [];
  @Output() tasksChange = new EventEmitter<Task[]>();

  constructor(private todoService: TodoService) {}

  onToggle(id: string) {
    const currentTask = this.tasks.find((task) => task.id === id);
    if (!currentTask) {
      return alert('Task not found');
    }

    const task = { ...currentTask, completed: !currentTask.completed };
    const tasks = this.tasks.map((t) => (t.id === id ? task : t));

    this.tasksChange.emit(tasks);
    this.todoService.editTask(task).subscribe();
  }

  onEdit(id: string) {
    const title = window.prompt('Edit task', String(this.task?.title));

    if (!title) {
      return;
    }

    const currentTask = this.tasks.find((task) => task.id === id);
    if (!currentTask) {
      return alert('Task not found');
    }

    const newTask = { ...currentTask, title };
    const updatedTasks = this.tasks.map((t) => (t.id === id ? newTask : t));

    this.tasksChange.emit(updatedTasks);
    this.todoService.editTask(newTask).subscribe();
  }

  onDelete(id: string) {
    const confirm = window.confirm(`Are you sure to delete task ${id}`);

    if (!confirm) {
      return;
    }

    const updatedTasks = this.tasks.filter((task) => task.id !== id);
    this.tasksChange.emit(updatedTasks);
    this.todoService.deleteTask(id).subscribe();
  }
}
