import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL, TODO_API_URL } from 'src/app/app.constants';
@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http: HttpClient ) { }

  retriveAllTodos(username: string) {
    return this.http.get<Todo[]>(`${TODO_API_URL}/users/${username}/todos`);
  }

  deleteTodo(id:any, username:any) {
    return this.http.delete(`${TODO_API_URL}/users/${username}/todos/${id}`);
  }

  getTodo(id:any, username:any) {
    return this.http.get<Todo>(`${TODO_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username:any, id:any, todo:Todo) {
    return this.http.put<Todo>(`${TODO_API_URL}/users/${username}/todos/${id}`, todo);
  }

  saveTodo(username:any, todo:Todo) {
    return this.http.post<Todo>(`${TODO_API_URL}/users/${username}/todos`, todo);
  }
}
