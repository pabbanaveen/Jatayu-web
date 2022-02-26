import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { API_URL } from '../app.constants';

export const TOKEN = "token";
export const AUTHENTICATED_USER="authenticatedUser";
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  executeJWTAuthentication(username:string, password:string) {
    return this.http.post<any>(`${API_URL}/authentication`, {username, password}).pipe(
      map(
        (data: any) => {
          console.log(data + 'in basic -auth secure');
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);

          return data;
        }
      )
    )
  }
  
  getAuthenticatedUser() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }
  
  getAuthenticatedToken() {
    return sessionStorage.getItem(TOKEN);;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message:string){
  } 
}