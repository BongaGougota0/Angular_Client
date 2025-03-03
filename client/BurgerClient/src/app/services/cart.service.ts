import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey: string = 'CART';
  private wishListKey: string = 'WISHLIST';
  // broadcast for components.
  cartTotal: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  cartTotalQty: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  cart: Product[] = [];
  wishList: Product[] = [];

  constructor() {
    const savedCart = localStorage.getItem(this.cartKey);
    this.cart = savedCart ? JSON.parse(savedCart) : [];
    // Wishlist
    const savedWishList = localStorage.getItem(this.wishListKey);
    this.wishList = savedWishList ? JSON.parse(savedWishList) : [];
   }

   private saveCart(){
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));

    const updatedCount = this.getCart().reduce((total, item) => total += item.productCount, 0);
    this.cartTotal.next(updatedCount);

    const updatedQty = this.getCart().reduce((totalQty, item) => totalQty += item.productCount, 0 );
    this.cartTotalQty.next(updatedQty);
   }

   private saveWishList(): void{
    localStorage.setItem(this.wishListKey, JSON.stringify(this.wishList))
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

  addToWishList(product: Product): void {
    const existingProduct = this.getWishListProductById(product.productId);
    if(existingProduct){
      existingProduct.productCount += 1;
    }else{
      this.wishList.push({...product, productCount : 1});
    }
    this.saveWishList();
  }

  getWishListProductById(id: number): Product | undefined{
    return this.wishList.find(item => item.productId === id);
  }

  getCart(): Product[]{
    const myCart = localStorage.getItem(this.cartKey);
    if (myCart) {
      return JSON.parse(myCart);
    }
    return [];
  }

  getWishList(): Product[]{
    const wishList = localStorage.getItem(this.wishListKey);
    if(wishList){
      return JSON.parse(wishList);
    }
    return [];
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
      this.saveCart();
    }
  }

  clearCart():void{
    this.cart = [];
    localStorage.removeItem(this.cartKey);
  }
}
