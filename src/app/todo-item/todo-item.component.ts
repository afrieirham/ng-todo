import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TodoService } from '../services/todo.service';
import { Task } from '../types/Task';

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

  onToggle(id: string) {}
  onEdit(id: string) {}

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
