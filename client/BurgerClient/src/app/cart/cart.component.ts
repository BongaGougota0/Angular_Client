import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  public products: Product[] = [];
  public activeTabId = 'cart-page';
  public cartTotal = 0;
  public totalInclusiveVAT = 0;
  public shipping = 40.00;
  public subTotal = 0;
  public cartQty = 0;
  
  private cartTotalSubscription: Subscription = new Subscription();
  private cartQtySubscription: Subscription = new Subscription();

  constructor(
    private cartService: CartService,
    private productsService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCartData();
    this.setupSubscriptions();
  }

  ngOnDestroy(): void {
    this.cartTotalSubscription.unsubscribe();
    this.cartQtySubscription.unsubscribe();
  }

  private loadCartData(): void 
  {
    this.products = this.cartService.getCart();
    this.calculateCartDetails();
  }

  private setupSubscriptions(): void 
  {
    this.cartTotalSubscription = this.cartService.cartTotal.subscribe(totalValue => {
      this.cartTotal = totalValue;
      this.calculateCartDetails();
    });

    this.cartQtySubscription = this.cartService.cartTotalQty.subscribe(totalQty => {
      this.cartQty = totalQty;
    });
  }

  incrementProduct(productId: number): void 
  {
    this.cartService.addToCartById(productId);
    this.products = this.cartService.getCart();
  }

  decrementProduct(productId: number): void 
  {
    this.cartService.decrementProductCount(productId);
    this.products = this.cartService.getCart();
  }

  calculateCartDetails(): void 
  {
    this.subTotal = this.products.reduce(
      (total, item) => total + (item.productCount * item.productPrice), 
      0
    );

    this.totalInclusiveVAT = this.subTotal * 0.15;

    // Calculate final subtotal
    if (this.cartTotal < 200) {
      this.subTotal = this.cartTotal + this.totalInclusiveVAT + this.shipping;
    } else {
      this.subTotal = this.cartTotal + this.totalInclusiveVAT;
    }
  }

  showTab(tabId: string): void {
    this.activeTabId = tabId;
  }

  continueShopping(): void {
    this.router.navigate(['products']);
  }

  postOrder(): void 
  {
    const orderSubscription = this.productsService.postOrder().subscribe({
      next: () => {
        this.router.navigate(['products']);
      },
      error: (error) => {
        console.error('Order submission failed:', error);
        this.router.navigate(['login']);
      },
      complete: () => {
        orderSubscription.unsubscribe();
      }
    });
  }
}