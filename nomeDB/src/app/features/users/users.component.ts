import { UsersService } from './users.service';
import { User } from 'src/app/core/model/user.model';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  userDettagli: User = {} as User;

  constructor(private serviceUser: UsersService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.serviceUser.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  Dettagli(us: any) {
    this.userDettagli = us;
    this.serviceUser.opacita=true

  }

  chiudi(a: any) {
    this.userDettagli = {} as User;
    this.serviceUser.opacita=false
  }
}
