import { UsersService } from './users.service';
import { User } from 'src/app/core/model/user.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private serviceUser: UsersService) {}

  ngOnInit(): void {
    this.loadUsers()
  }

  users: User[] = [];

  loadUsers(){
    this.serviceUser.getUsers().subscribe((data)=>{
      this.users = data;
      console.log(this.users);
    })
  }
}
