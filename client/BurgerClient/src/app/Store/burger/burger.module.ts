import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerRoutingModule } from './burger-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ExtrasComponent } from './extras/extras.component';
import { CategoryViewComponent } from './category-view/category-view.component';


@NgModule({
  declarations: [
    MenuComponent,
    CartComponent,
    CheckoutComponent,
    ExtrasComponent,
    CategoryViewComponent
  ],
  imports: [
    CommonModule,
    BurgerRoutingModule
  ]
})
export class BurgerModule { }
