import { UsersService } from './features/users/users.service';
import { Component, OnInit } from '@angular/core';
import { ProductsStore } from './features/products/products.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'nomeDB';

constructor(public usService: UsersService){}
  ngOnInit(): void {

  }

}
