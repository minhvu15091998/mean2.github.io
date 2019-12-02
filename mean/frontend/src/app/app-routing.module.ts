import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {path:'', redirectTo: 'main', pathMatch:'full'},
  {path: 'cart',component: CartComponent},
  {path: 'book',component: BookComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'user', component: UserhomeComponent},
  {path:'main', component: MainPageComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
