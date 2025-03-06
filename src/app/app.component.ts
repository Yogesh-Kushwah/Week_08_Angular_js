import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],  // ✅ Import FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  title: string = "Yogesh AngularJS"; 
  imgUrl = "https://gumlet.assettype.com/freepressjournal%2F2021-06%2F32af7f9f-b603-4e12-8340-ba2425bb5ee8%2FBridgeLabz.PNG"; 
  url: string = "https://www.bridgelabz.com";
  userName: string = "";  // ✅ Ensure `userName` is declared

  ngOnInit(): void {
    this.title = "Yogesh, Hello from BridgeLabz";  
  }

  onClick(event: MouseEvent) {
    console.log("Button clicked!", event);
    window.open(this.url, "_blank");
  }
}
