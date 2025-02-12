import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';

const routes : Routes=[
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    SideMenuComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
