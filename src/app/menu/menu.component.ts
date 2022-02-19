import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLogedIn = false;
  constructor(public authenticateionService: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    // this.isUserLogedIn = this.authenticateionService.isUserLoggedIn();
  }



}
