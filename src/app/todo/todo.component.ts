import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../list-todos/list-todos.component';
import { TodoDataService } from '../service/data/todo-data.service';

export const AUTHENTICATED_USER="authenticatedUser";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  id = 0;
  todo: Todo | any;
  username!: string | null;
  constructor(private route:ActivatedRoute, private todoService: TodoDataService, private router: Router) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.username = sessionStorage.getItem(AUTHENTICATED_USER);
    this.todo = new Todo(1, '', false, new Date(), '');
    if (this.id != -1) {
      
      this.todoService.getTodo(this.id, this.username).subscribe(
        response => {
          console.log(response);
          this.todo = response;
        }
      )
    }
  }

  saveTodo() {
    if(this.id == -1) { // when 
      this.todo.username = this.username;
      this.todoService.saveTodo(this.username, this.todo).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['todos']);
        }
      )
    } else {
    this.todoService.updateTodo(this.username, this.id, this.todo).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['todos']);
      }
    )
    }
  }
}
