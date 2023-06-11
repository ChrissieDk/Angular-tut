import { Component } from '@angular/core';
// 
@Component({
  // assigns a string as a value - string holds in this case "app-root"
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: dodgerblue
    }
  `]
})
export class AppComponent {
  
}
