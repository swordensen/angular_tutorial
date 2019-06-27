import { Component, OnInit } from '@angular/core';
import { TodoCollectionService } from '../todo-collection.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos;
  showForm = false;
  constructor(private todoCollectionService: TodoCollectionService) { 
  }

  ngOnInit() {
    this.todos = this.todoCollectionService.todos;
  }

  toggleForm(){
    this.showForm = !this.showForm;
  }

  addTodo(todo){
    this.todoCollectionService.addTodo(todo);
  }

}
