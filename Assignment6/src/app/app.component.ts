import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  submitted = false;
  user = {
    email: '',
    subscriptions: 'advanced',
    password: ''
  }

  onSubmit() {
    console.log(this.form);
    this.user.email = this.form.value.email;
    this.user.subscriptions = this.form.value.subscriptions;
    this.user.password = this.form.value.password;
    this.submitted = true;
    this.form.reset();
  }

}
