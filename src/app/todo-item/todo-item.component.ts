import { Component, Input } from '@angular/core';
import { Task } from '../types/Task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() task?: Task;

  onToggle(id: string) {}
  onEdit(id: string) {}
  onDelete(id: string) {}
}
