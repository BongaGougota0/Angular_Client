import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey: string = 'CART';
  cart: Product[]= [];

  constructor() {
    const savedCart = localStorage.getItem(this.cartKey);
    this.cart = savedCart ? JSON.parse(savedCart) : [];
   }

   private saveCart(){
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
   }

  addToCartById(productId : number): void{
    const product  = this.getCartItem(productId);
    if(product){
      this.addToCart(product);
    }
  }

  addToCart(product: Product): void{
    const existingProduct = this.getCartItem(product.productId);
    if(existingProduct){
      existingProduct.productCount += 1;
    } else{
      this.cart.push({...product, productCount : 1});
    }
    this.saveCart();
  }

  getCartItem(productId : number): Product | undefined{
   return this.cart.find(p => p.productId === productId);
  }

  removeFromCart(productId : number): void{
    this.cart = this.cart.filter(existingProduct => existingProduct.productId !== productId);
    this.saveCart();
  }

  incrementProductCount(productId : number){
    const product = this.getCartItem(productId);
    if(product){
      product.productCount += 1;
    this.saveCart();
    }
  }

  decrementProductCount(productId : number){
    const product = this.getCartItem(productId);
    if(product && product.productCount > 1){
      product.productCount -= 1;
      this.saveCart();
    }else{
      this.removeFromCart(productId);
    }
  }

  clearCart():void{
    this.cart = [];
    localStorage.removeItem(this.cartKey);
  }
}
