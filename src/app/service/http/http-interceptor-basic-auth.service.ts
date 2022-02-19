import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthService: BasicAuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // let username='naveen';
    // let password ='naveen';
    // let basicAuthHeaderString = 'Basic '+ window.btoa(username+ ':'+password);
    let basicAuthHeaderString =  this.basicAuthService.getAuthenticatedToken() ;
    let username =  this.basicAuthService.getAuthenticatedUser();

    if(basicAuthHeaderString && username) {    
           request = request.clone({
          setHeaders: {
            Authorization: basicAuthHeaderString
          }
        })
      }
    // return basicAuthHeaderString;
    // throw new Error('Method not implemented.');
    return next.handle(request);
  }
}
// eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY0NTQzMzkxMCwiaWF0IjoxNjQ0ODI5MTEwfQ.EChQhWlt9B1fWCrjvySqkgVqcYMfpINEGSSdySVouVwQYrcI-j63TM7VvaHfx5rpzJTR08O7V0nfCdsYKw0uYg
// eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTY0NTUxMDQzMiwiaWF0IjoxNjQ0OTA1NjMyfQ.-C3mzkn-iTBscgiBgNzSPJCKefkULLV2PXQ2-AhmpKQhVyknTDzA9IRaQgHbxteKde7yhvNL7P-z3BAAM57oNw