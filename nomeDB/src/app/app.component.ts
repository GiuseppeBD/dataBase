import { Component } from '@angular/core';
import { ProductsStore } from './features/products/products.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nomeDB';

  constructor(public prStore: ProductsStore) {}
  ngOnInit(){

    }

}
