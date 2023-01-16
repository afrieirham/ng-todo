import { Component, OnInit } from '@angular/core';

import { Task } from './types/task';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];
  loading: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.loading = true;
    this.todoService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.loading = false;
    });
  }

  onSubmit(task: HTMLInputElement) {
    if (!task.value) {
      return;
    }

    this.todoService
      .addTask(task.value)
      .subscribe((task) => this.tasks.push(task));

    task.value = '';
  }
}
