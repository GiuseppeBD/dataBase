import { ProductsService } from './../products/products.service';
import { Component, OnInit } from '@angular/core';
import { ProductsStore } from '../products/products.store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'price', 'quantity'];

  constructor(
    public prStore: ProductsStore,
    public prService: ProductsService
  ) {}

  ngOnInit(): void {
    this.prStore.TotalCartShop();
  }

  comprato() {
    this.prStore.buyCart();
  }
}
