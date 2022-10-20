import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Todo {
  title: string;
  status: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todo[] = [];

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`/api/todos`);
  }

  saveTodo(title: string): Observable<boolean> {
    return this.http.post<boolean>(`/api/todos`, { title });
  }

  deleteTodo(index: number): Observable<boolean> {
    return this.http.post<boolean>(`/api/todos/delete`, { index });
  }
}
