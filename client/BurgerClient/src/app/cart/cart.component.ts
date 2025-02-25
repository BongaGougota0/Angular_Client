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
  public cartTotal: number = 0;
  public totalInclusiveVAT: number = 0;
  public shipping: number = 40;
  public subTotal: number = 0;
  public cartQty: number = 0;

  constructor(private cartService: CartService,
    private productsService : ProductService,
     private router: Router){}

  ngOnInit(): void {
    this.activeTabId = 'cart-page';
    this.products = this.cartService.getCart();
    this.calculateCartDetails();
  }

  incrementProduct(productId : number){
    this.cartService.addToCartById(productId);
  }

  decrementProduct(productId : number){
    this.cartService.decrementProductCount(productId);
  }

  calculateCartDetails(): void{
    this.cartTotal = this.products.reduce((total, item) => total += Number(item.productPrice) * item.productCount, 0);
    this.totalInclusiveVAT= this.cartTotal * 0.15;
    this.subTotal = this.totalInclusiveVAT + this.cartTotal + this.shipping;
    this.cartQty = this.products.reduce((total, item) => total += item.productCount, 0)
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
