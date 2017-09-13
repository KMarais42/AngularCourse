import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testing = 'Tester';
  isNotactive() {
    if (this.testing === '') {
      return true;
    } else {
      return false;
    }
  }
  clicker() {
    this.testing = '';
  }
}
