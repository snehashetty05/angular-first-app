import { Component, inject, OnInit, signal } from '@angular/core';
import { Todos } from '../services/todos';
import { TODO } from '../model/todo.type';
import { TodoItem } from '../components/todo-item/todo-item';


@Component({
  imports: [TodoItem],
  selector: 'app-todo',
  styleUrl: './todo.scss',
  templateUrl: './todo.html',
})
export class Todo implements OnInit {
  
  todoService = inject(Todos);
  todos = signal<Array<TODO>>([]);

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next : (data) => {
        this.todos.set(data);
      },
      error : (error) => {
        console.error('Error fetching todos:', error);
      }
    });
  }

  updateTodo(updatedTodo: TODO) {
    this.todos.update((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  }

}
