import { Component } from '@angular/core';
import { ProductsStore } from 'src/app/features/products/products.store';

@Component({
  selector: 'app-navbar',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button>
        <mat-icon>menu</mat-icon>
      </button>
      <span>My App</span>
      <span class="example-spacer"></span>
      <a mat-flat-button routerLink="/home">Home</a>
      <a mat-flat-button routerLink="/user">User</a>
      <a mat-flat-button routerLink="/products">Shop</a>
      <a mat-icon-button routerLink="/cart"
        ><mat-icon matBadgeColor="warn" [matBadge]="prStore.cartUser.length"
          >shopping_cart</mat-icon
        ></a
      >
    </mat-toolbar>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public prStore: ProductsStore) {}
  ngOnInit() {}
}
