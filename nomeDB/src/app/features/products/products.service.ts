import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsStore } from './products.store';
import { Product } from 'src/app/core/model/prodotti.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://localhost:3000/products/';

  constructor(public http: HttpClient, public prStore: ProductsStore) {}

  loadProducts() {
    this.http.get<Product[]>(this.url).subscribe((data) => {
      this.prStore.loadProducts(data);
    });
  }

  addQuantity(pr: any) {
    this.http.put<Product>(this.url + pr.id, pr).subscribe((data) => {
      this.prStore.addQuantity(data);
    });
  }

}
