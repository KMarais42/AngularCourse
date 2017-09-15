import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displaybtn = false;
  myevents = [];
  timestamp;
  btnClicked() {
    this.displaybtn = true;
    this.myevents.push(this.myevents.length);
  }
}
