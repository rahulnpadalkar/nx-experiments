import { Injectable } from '@nestjs/common';

interface Todo {
  title: string;
}

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo(title: string) {
    this.todos.push({
      title,
    });
  }

  deleteTodo(index: number) {
    this.todos = [
      ...this.todos.slice(0, index),
      ...this.todos.slice(index + 1),
    ];
    return true;
  }
}
