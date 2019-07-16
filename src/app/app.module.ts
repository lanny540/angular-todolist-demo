import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { CreateTodoComponent } from './todo/create-todo/create-todo.component';
import { TodoDetailComponent } from './todo/todo-detail/todo-detail.component';
import { TodoService } from './providers/todo.service';
import { CategoryPipe } from './pipes/category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CreateTodoComponent,
    TodoListComponent,
    TodoDetailComponent,
    CategoryPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
