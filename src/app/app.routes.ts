import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Todo } from './todo/todo';

export const routes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home', component:Home},
    {path:'todos', component:Todo}
];
