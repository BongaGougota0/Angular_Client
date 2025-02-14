import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productsService: ProductService, private router: Router){
    
  }

  ngOnInit(): void 
  {
    this.productsService.getAllProducts().subscribe( productsList => this.products = productsList);
  }

  addProductToCart(): void
  {

  }

  addProductToWishList(): void
  {

  }

  viewProduct(productId : number): void
  {
    this.router.navigate([`/product/${productId}`]);
  }

}
