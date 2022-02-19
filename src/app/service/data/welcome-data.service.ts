import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message:String){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`)
  }

  executeHelloWorldBeanServiceWithPathVariable(name: String) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/${name}`)
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username='naveen';
  //   let password ='naveen';
  //   let basicAuthHeaderString = 'Basic '+ window.btoa(username+ ':'+password);
  //   return basicAuthHeaderString;
  // }
}
