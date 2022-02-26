import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

export const AUTHENTICATED_USER="authenticatedUser";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, 
    private basicAuthService: BasicAuthenticationService) { 
  }

  username: any = '';
  password='';
  errorMessage='invalid creadentials';
  invalidLogin= false;

  ngOnInit(): void {
  }

  handelAuthLogin(){
      this.basicAuthService.executeJWTAuthentication(this.username, this.password).subscribe(
      data => {
        this.router.navigate(['welcome', this.username]);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
  }
}
