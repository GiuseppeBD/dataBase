import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliUsersComponent } from './features/dettagli-users/dettagli-users.component';
import { UsersComponent } from './features/users/users.component';
import { ProductsComponent } from './features/products/products.component';
import { CartComponent } from './features/cart/cart.component';

const routes: Routes = [
{path:'', component: HomeComponent},
{path:'home', redirectTo:'/'},

{path:'dettagliUser', component: DettagliUsersComponent},
{path:'user', component: UsersComponent},
{path:'products', component: ProductsComponent},
{path:'cart', component: CartComponent},





{path:'**', redirectTo:'/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
