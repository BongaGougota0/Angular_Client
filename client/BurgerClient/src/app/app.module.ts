import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';

const routes : Routes=[
  {path: '', redirectTo : 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'products', component: ProductsComponent},
  {path:'product/:productId', component: ProductViewComponent},
  {path:'products/:category', component: CategoryViewComponent},
  {path:'order-details', component: CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    ProductsComponent,
    ProductViewComponent,
    CategoryViewComponent,
    CartComponent,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
