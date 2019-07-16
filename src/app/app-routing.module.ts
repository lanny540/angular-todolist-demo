import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';


const routes: Routes = [
  {path: 'todo', component: TodoComponent},
  {path: 'todo/:id', component: TodoDetailComponent},
  // 懒加载
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: '', redirectTo: 'todo', pathMatch: 'full'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
