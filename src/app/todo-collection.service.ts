import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoCollectionService {
  todos = ['item1','item2','item3', 'a;sldkjga;lsdkgja;sdlkgj']
  constructor() { }

  /**
   * this is a function that adds to dos
   * @param todo 
   */
  addTodo(todo){
    this.todos.push(todo);
  }
}
