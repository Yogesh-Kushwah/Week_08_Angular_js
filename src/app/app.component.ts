import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Hello from BridgeLabz";
  imgUrl: string = "https://gumlet.assettype.com/freepressjournal%2F2021-06%2F32af7f9f-b603-4e12-8340-ba2425bb5ee8%2FBridgeLabz.PNG";
  url: string = "https://www.bridgelabz.com";
  userName: string = "";
  nameError: string = "";

  onInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.userName = inputValue;  

    const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/;
    this.nameError = nameRegex.test(this.userName) ? "" : "Name is Incorrect!";
  }

  onClick(event: Event) {
    console.log("BridgeLabz logo clicked!", event);
  }
}
