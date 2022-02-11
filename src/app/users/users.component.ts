import { Component, OnInit } from '@angular/core';
import usersJson from '../../assets/users.json';

interface User {
  id: number,
  username: string,
  name: string,
  location: string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  selection: User | undefined = undefined;
  dialog: boolean = false;

  constructor() {
    this.users = usersJson;
  }

  ngOnInit(): void {
  }

  openDialog(user: User) {
    this.selection = user;
    this.dialog = true;
  }

}
