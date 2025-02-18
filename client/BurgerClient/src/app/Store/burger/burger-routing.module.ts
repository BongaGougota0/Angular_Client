import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from 'src/app/product-view/product-view.component';

const routes: Routes = [
  {path:'product-view/category/:category', component: ProductViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BurgerRoutingModule { }
