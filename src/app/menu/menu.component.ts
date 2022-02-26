import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLogedIn = false;
  constructor(public authenticateionService: BasicAuthenticationService) { }

  ngOnInit(): void {
    // this.isUserLogedIn = this.authenticateionService.isUserLoggedIn();
  }



}
