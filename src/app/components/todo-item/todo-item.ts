import { Component, input, output } from '@angular/core';
import { TODO } from '../../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo-directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  selector: 'app-todo-item',
  styleUrl: './todo-item.scss',
  templateUrl: './todo-item.html',
})
export class TodoItem {
  todo = input.required<TODO>();
  todoToggled = output<TODO>();

  onTodoToggle() {
    this.todoToggled.emit(this.todo());
  }
}
