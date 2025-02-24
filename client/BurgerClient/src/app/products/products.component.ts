import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productsService: ProductService,
    private cartService: CartService, private router: Router){
    
  }

  ngOnInit(): void 
  {
    this.productsService.getAllProducts()
    .subscribe
    ({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  addProductToCart(product: Product): void
  {
    this.cartService.addToCart(product);
  }

  addProductToWishList(): void
  {

  }

  viewProduct(productId : number): void
  {
    this.router.navigate([`/product/${productId}`]);
  }

}
