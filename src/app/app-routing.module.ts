import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component'; 
import { ContactusComponent } from './contactus/contactus.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:"home", component:HomeComponent}, 
  {path:"contactus", component:ContactusComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent = [LoginComponent,HomeComponent,ContactusComponent];

