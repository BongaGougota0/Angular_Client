import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  public products: Product[] = [];
  public activeTabId?: string;

  constructor(private cartService: CartService,
    private productsService : ProductService,
     private router: Router){}

  ngOnInit(): void {
    this.activeTabId = 'cart-page';
    this.products = this.cartService.getCart();
  }

  incrementProduct(productId : number){
    this.cartService.addToCartById(productId);
  }

  decrementProduct(productId : number){
    this.cartService.decrementProductCount(productId);
  }

  showTab(tabId : string){
    this.activeTabId = tabId;
  }

  continueShopping(): void{
    this.router.navigate(['products'])
  }

  postOrder(): void{
    this.productsService.postOrder().subscribe(
      {
        next: (response) => {
          console.log(`order placed response: ${response}`);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
