
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-dettagli-users',
  templateUrl: './dettagli-users.component.html',
  styleUrls: ['./dettagli-users.component.css'],
})
export class DettagliUsersComponent {

@Input() dettaglioUser:any;
@Output() Esc= new EventEmitter()


}
