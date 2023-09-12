import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/Home/home.component';
import { AccountComponent } from './components/Account/account.component';
import { CartComponent } from './components/Cart/cart.component';
import { LoginComponent } from './components/Login/login.component';
import { LogOutComponent } from './components/LogOut/log-out.component';
import { OrdersComponent } from './components/Orders/orders.component';
import { ProductsComponent } from './components/Products/products.component';
import { SignUpComponent } from './components/SignUp/sign-up.component';
import { NotFoundComponent } from './components/Not-found/not-found.component';

const routes: Routes = [
     { path: '',         component: HomeComponent},
     { path: 'Account',  component: AccountComponent},
     {path: 'Cart',      component: CartComponent},
     {path:'Login',      component: LoginComponent},
     {path:'LogOut' ,    component: LogOutComponent},
     {path: 'SignUp',    component:SignUpComponent},
     {path:'Orders',     component: OrdersComponent},
     {path:'Products',   component:ProductsComponent},
     {path: '**' ,       component: NotFoundComponent}

     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
