import { User } from './../../core/model/user.model';
import { DettagliUserService } from './dettagli-user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dettagli-users',
  templateUrl: './dettagli-users.component.html',
  styleUrls: ['./dettagli-users.component.css'],
})
export class DettagliUsersComponent {
  users: User[] = [];

  constructor(private dettUtente: DettagliUserService) {}

  ngOnInit() {
    this.dettUtente.loadDettagli().subscribe((data) => {
      this.users = data;
      console.log(this.users)
    });
  }
}
