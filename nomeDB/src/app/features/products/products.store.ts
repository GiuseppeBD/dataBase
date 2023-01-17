import { Product } from './../../core/model/prodotti.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsStore {

  products: Product[] = [];

  loadProducts(data:Product[]) {
    this.products=data
  }

  addQuantity(item:Product){
    this.products = this.products.map((r) => (r.id === item.id ? item : r));
  }

}
