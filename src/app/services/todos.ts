import { inject, Injectable } from '@angular/core';
import { TODO } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Todos {
    url = 'https://jsonplaceholder.typicode.com/todos';
    http = inject(HttpClient);

    // todos: Array<TODO> = [
    //     {
    //         id: '1',
    //         title: 'Learn Angular',
    //         completed: false,
    //         userId: '1'
    //     },
    //     {
    //         id: '2',
    //         title: 'Learn TypeScript',
    //         completed: false,
    //         userId: '1'
    //     }
    // ];

    getTodos(): Observable<Array<TODO>> {
        return this.http.get<Array<TODO>>(this.url);
    }
}
