import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../providers/todo.service';
import { Todo } from '../../interface';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo;
  constructor(private route: ActivatedRoute, private todoServe: TodoService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.todo = this.todoServe.getTodo(id);
  }

  goBack() {
    history.back();
  }

}
