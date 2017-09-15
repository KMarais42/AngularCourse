import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users = [];
  toInactive = 0;
  constructor(private activeUsers: UsersService) { }
  ngOnInit() {
    this.users = this.activeUsers.activeUsers;
  }
  onSetToInactive(index: number) {
    this.activeUsers.onSetToInactive(index);
    this.toInactive = this.activeUsers.activeToInactive;
  }
}
