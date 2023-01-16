import { HomeComponent } from './features/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DettagliUsersComponent } from './features/dettagli-users/dettagli-users.component';
import { UsersComponent } from './features/users/users.component';

const routes: Routes = [
{path:'', component: HomeComponent},
{path:'home', redirectTo:'/'},

{path:'dettagliUser', component: DettagliUsersComponent},
{path:'user', component: UsersComponent},





{path:'**', redirectTo:'/'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
