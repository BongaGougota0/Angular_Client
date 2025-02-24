import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ErrorResponse } from '../models/error-response';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-category-view',
  templateUrl: '../products/products.component.html',
  styleUrls: ['../products/products.component.css']
})
export class CategoryViewComponent implements OnInit{
  public products?: Product[] = [];
  public categoryName!: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService,
    private productsService: ProductService
  ){}

  ngOnInit(): void 
  {
    this.getProducts();
  }

  getProducts(): void
  {
    this.route.params.subscribe(categoryName => this.categoryName = categoryName["category"]);
    this.productsService.getProductsByCategory(this.categoryName)
    .subscribe
    ({
      next: (data: Product[]) =>{
        this.products = data;
      },
      error: (error: ErrorResponse) =>{
        console.log(error.timestamp);
        if(error.statusCode == '400 BAD_REQUEST'){
          console.log(error.message)
        }
      }
    })
  }

  addProductToCart(product: Product): void
  {
    this.cartService.addToCart(product);
  }

  addProductToWishList(product: Product): void
  {
    this.cartService.addToCart(product);
  }
}
