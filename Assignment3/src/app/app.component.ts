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
    this.timestamp = (new Date('2017/09/05 15:34:00').getTime() / 1000 );
    this.myevents.push(this.timestamp);
  }
}
