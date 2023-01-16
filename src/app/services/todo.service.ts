import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

import { Task } from '../types/Task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = 'http://localhost:3000';
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
}
