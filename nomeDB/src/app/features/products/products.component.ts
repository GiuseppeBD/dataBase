import { ProductsService } from './products.service';
import { Component, OnInit } from '@angular/core';
import { ProductsStore } from './products.store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'price', 'quantity', 'add'];

  constructor(
    public prService: ProductsService,
    public prStore: ProductsStore
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.prService.loadProducts();
  }

  addQuantity(elem: any, add: number) {
    elem.quantity += add;
    if (elem.quantity >= 0) {
      this.prService.addQuantity(elem);
      return;
    } else {
      elem.quantity = 0;
    }
  }

  addOnCart(element: any) {
    this.prStore.addOnCart(element);
  }






}
