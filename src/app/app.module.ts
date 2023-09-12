import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/Home/home.component';
import { SignUpComponent } from './components/SignUp/sign-up.component';
import { LoginComponent } from './components/Login/login.component';
import { LogOutComponent } from './components/LogOut/log-out.component';
import { CartComponent } from './components/Cart/cart.component';
import { AccountComponent } from './components/Account/account.component';
import { OrdersComponent } from './components/Orders/orders.component';
import { ProductsComponent } from './components/Products/products.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { NotFoundComponent } from './components/Not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    LoginComponent,
    LogOutComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    ProductsComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
