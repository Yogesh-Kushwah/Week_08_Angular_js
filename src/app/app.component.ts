import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = "Hello from BridgeLabz";
  imgUrl: string = "https://gumlet.assettype.com/freepressjournal%2F2021-06%2F32af7f9f-b603-4e12-8340-ba2425bb5ee8%2FBridgeLabz.PNG";
  url: string = "https://www.bridgelabz.com";
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void {
    this.title = "Yogesh, Hello from BridgeLabz";
  }

  onClick(event: MouseEvent) {
    console.log("Image clicked!", event);
    window.open(this.url, "_blank");
  }

  onInput(event: Event) {
    console.log("Input changed:", event);
    const nameRegex = /^[A-Z][a-zA-Z\s]{2,}$/;  // Starts with a capital, min 3 letters
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
    } else {
      this.nameError = "Name must start with a capital letter and have at least 3 letters!";
    }
  }
}
