import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authService: BasicAuthenticationService) { }

  ngOnInit(): void {
    this.authService.logout();
  }

  login() {
    this.router.navigate(['/login']);
  }

}
