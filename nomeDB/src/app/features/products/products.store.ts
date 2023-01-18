import { Product } from './../../core/model/prodotti.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsStore {
  products: Product[] = [];
  cartUser: Product[] = [];
  totalShop: number = 0;




  TotalCartShop(){
    //(contenitore della somma, elemneto che viene ciclato)=>{ operazione, valore di partenza}
    this.totalShop= this.cartUser.reduce((somma, elemento)=> somma+= elemento.price*elemento.quantity,0)
  }

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
  }


  buyCart(){
    this.cartUser=[]
    this.totalShop=0
    alert('transazione eseguita')
  }



}
