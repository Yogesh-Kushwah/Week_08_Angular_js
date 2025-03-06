import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  title: string = " Yogesh AngularJS"; 
  ImageURL = "https://gumlet.assettype.com/freepressjournal%2F2021-06%2F32af7f9f-b603-4e12-8340-ba2425bb5ee8%2FBridgeLabz.PNG"; 
  url: string = "https://www.bridgelabz.com";

  ngOnInit(): void {
    this.title = "Yogesh, Hello from BridgeLabz";  
  }

}