import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BurgerRoutingModule } from './burger-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ExtrasComponent } from './extras/extras.component';


@NgModule({
  declarations: [
    MenuComponent,
    CartComponent,
    CheckoutComponent,
    ExtrasComponent
  ],
  imports: [
    CommonModule,
    BurgerRoutingModule
  ]
})
export class BurgerModule { }
