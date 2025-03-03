import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit{
  public productId!: number ;
  public productView!: Product;

  constructor(private productService : ProductService, private cartService: CartService,
     private route: ActivatedRoute, private router : Router){}

  ngOnInit(): void 
  {
    this.route.params.subscribe(
      params => this.productId = +params['productId']
    );
    if(this.productId){
      this.getProductData(this.productId);
    }
  }

  getProductData(productId : number): void
  {
    this.productService.getProductById(productId).subscribe({
      next: (data) => {
        this.productView = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  public addProductToCart(productId: Product){
    this.cartService.addToCart(productId);
  }

  public addProductToWishList(product: Product){
    this.cartService.addToWishList(product);
  }

  updateQty(product : Product, increment: boolean): void
  {
    if(increment){
      this.cartService.addToCart(product);
    }else{
      this.cartService.decrementProductCount(product.productId);
    }
  }

}
