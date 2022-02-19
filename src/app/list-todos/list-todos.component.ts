import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id:number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
    public username: string,
  ){

  }
}

export const AUTHENTICATED_USER="authenticatedUser";
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];
  
  username: any = '';


  deleteMessage = '';
  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem(AUTHENTICATED_USER);
    this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.retriveAllTodos(this.username).subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id:any) {
    this.todoService.deleteTodo(id, this.username).subscribe(
      response => {
        this.deleteMessage = `Delete of Todo ${id} Successful!`;
        this.getAllTodos();
      }
    )
  }

  updateTodo(id:any) {
    console.log(id);
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }
}
