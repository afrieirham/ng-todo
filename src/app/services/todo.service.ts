import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Task } from '../types/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = 'https://json-server-eight-teal.vercel.app';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      return of(result as T);
    };
  }

  getTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>(`${this.baseUrl}/todos`)
      .pipe(catchError(this.handleError<Task[]>('getTasks')));
  }

  addTask(title: string): Observable<Task> {
    return this.http
      .post<Task>(
        `${this.baseUrl}/todos`,
        {
          title,
          completed: false,
        },
        this.httpOptions
      )
      .pipe(catchError(this.handleError<Task>('addTask')));
  }

  deleteTask(id: string): Observable<Task> {
    return this.http
      .delete<Task>(`${this.baseUrl}/todos/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError<Task>('deleteTask')));
  }

  editTask(newTask: Task): Observable<Task> {
    const { id, ...task } = newTask;
    return this.http
      .put<Task>(`${this.baseUrl}/todos/${id}`, task, this.httpOptions)
      .pipe(catchError(this.handleError<Task>('editTask')));
  }
}
