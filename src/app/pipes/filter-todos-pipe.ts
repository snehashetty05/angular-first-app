import { Pipe, PipeTransform } from '@angular/core';
import { TODO } from '../model/todo.type';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(value: TODO[], searchTerm: string): TODO[] {
    if (!searchTerm) {
      return value;
    } 
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return value.filter((todo) =>
      todo.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }
}
