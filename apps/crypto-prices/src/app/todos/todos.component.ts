import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

interface Todo {
  title: string;
  status: boolean;
}

@Component({
  selector: 'mycrypto-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  @Input() title = 'Sample todo';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.readTodos();
  }

  setTitle(e: any) {
    this.title = e.target.value;
  }

  saveTodo() {
    this.todosService
      .saveTodo(this.title)
      .subscribe((success) =>
        this.todos.push({ title: this.title, status: false })
      );
  }

  deleteTodo(index: number) {
    this.todosService.deleteTodo(index).subscribe((success) => {
      if (success) {
        this.todos = [
          ...this.todos.splice(0, index),
          ...this.todos.splice(index + 1),
        ];
      }
    });
  }

  readTodos() {
    this.todosService.getTodos().subscribe((t) => (this.todos = t));
  }
}
