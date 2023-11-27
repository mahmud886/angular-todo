import { Component } from '@angular/core';
import { Todo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Initial Todo
  get initialTodo() {
    return {
      title: '',
      id: null,
    };
  }
  todoList: Todo[] = [];
  todo: Todo = this.initialTodo;

  // Add todo
  addTodo(): void {
    if (this.todo.id) {
      this.todoList = this.todoList.map((item) => {
        if (item.id === this.todo.id) {
          item.title = this.todo.title;
        }
        return item;
      });
    } else {
      this.todo.id = Date.now();
      this.todoList.push({ ...this.todo });
    }
    console.log(this.todoList);

    this.todo = this.initialTodo;
  }

  // Edit Todo
  editTodo(todo: Todo): void {
    this.todo = { ...todo };
  }

  // Delete Todo
  deleteTodo(id: number): void {
    this.todoList = this.todoList.filter((todo) => todo.id != id);
  }
}
