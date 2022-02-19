import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name='';
  message= '';
  welcomErrorMessage= '';

  constructor(private route:ActivatedRoute, private service: WelcomeDataService) { }


  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomMessage() {
    console.log(this.service.executeHelloWorldBeanService().subscribe());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handelErrorResponse(error)
    )
    // console.log("welcome message");
  }

  handleSuccessfulResponse(response:any) {
    console.log(response);
    this.message = response.message;

  }

  handelErrorResponse(error:any) {
    console.log(error.error.message);
    this.welcomErrorMessage = error.error.message;
    
  }
  getWelcomMessageWirhParam() {
    console.log(this.service.executeHelloWorldBeanService().subscribe());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handelErrorResponse(error)
    )
    // console.log("welcome message");
  }
  // getSearched

}
