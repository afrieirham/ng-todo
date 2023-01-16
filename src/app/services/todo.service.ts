import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Task } from '../types/Task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>(`${this.baseUrl}/todos`)
      .pipe(catchError(this.handleError<Task[]>('getTasks')));
  }
}
