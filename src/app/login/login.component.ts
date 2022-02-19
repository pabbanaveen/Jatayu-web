import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

export const AUTHENTICATED_USER="authenticatedUser";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private hardcodeAuthentication: HardcodedAuthenticationService,
    private basicAuthService: BasicAuthenticationService) { 
  }

  username: any = '';
  password='';
  errorMessage='invalid creadentials';
  invalidLogin= false;

  ngOnInit(): void {
  }
  handelLogin(){
    if(this.hardcodeAuthentication.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handelBasicAuthLogin(){
    // this.invalidLogin = this.hardcodeAuthentication.authenticate(this.username, this.password);
    // this.basicAuthService.executeBasicAuthentication(this.username, this.password).subscribe(
      this.basicAuthService.executeJWTAuthentication(this.username, this.password).subscribe(

      data => {
        console.log(data);
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
