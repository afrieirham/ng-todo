import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../types/Task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  TASKS = [
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
    {
      id: '3',
      title: 'Refactor using service',
      completed: false,
    },
  ];

  constructor() {}

  getTasks(): Observable<Task[]> {
    return of(this.TASKS);
  }
}
