import { Injectable } from '@angular/core';
import { Task } from '../types/Task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  tasks = [
    {
      id: '1',
      title: 'Learn Angular 15',
      completed: false,
    },
    {
      id: '2',
      title: 'Build todo app',
      completed: false,
    },
  ];

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }
}
