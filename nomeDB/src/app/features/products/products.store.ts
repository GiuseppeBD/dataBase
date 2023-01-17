import { Product } from './../../core/model/prodotti.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsStore {
  products: Product[] = [];
  cartUser: Product[] = [];

  loadProducts(data: Product[]) {
    this.products = data;
  }

  addQuantity(item: Product) {
    this.products = this.products.map((product) =>
      product.id === item.id ? item : product
    );
  }

  addOnCart(item: Product) {
    this.cartUser.push(item);
    console.log(this.cartUser);
  }
}
