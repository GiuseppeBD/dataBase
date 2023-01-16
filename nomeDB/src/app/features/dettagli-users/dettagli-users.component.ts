
import { DettagliUserService } from './dettagli-user.service';
import { Component } from '@angular/core';
import { DettagliUser } from 'src/app/core/model/user.model';

@Component({
  selector: 'app-dettagli-users',
  templateUrl: './dettagli-users.component.html',
  styleUrls: ['./dettagli-users.component.css'],
})
export class DettagliUsersComponent {

  dettaglioUser: DettagliUser = {
    address:{},
    company:{}
  } as DettagliUser;
vis=false
  constructor(private dettUtente: DettagliUserService) {}

  ngOnInit() {}

  onSubmitForm(f: any) {
    this.dettUtente.loadDettagli(f.numeroid).subscribe((data) => {
      this.dettaglioUser=data
      console.log(this.dettaglioUser);
    });
    this.vis=true
  }
}
