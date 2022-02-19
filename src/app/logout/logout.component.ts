import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private hardcodeAuthService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    // sessionStorage.setItem('authenticatedUser', '');
    this.hardcodeAuthService.logout();
  }

  login() {
    this.router.navigate(['/login']);
  }

}
