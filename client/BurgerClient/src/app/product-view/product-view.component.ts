import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit{
  public productId!: number ;
  public productView!: Product;

  constructor(private productService : ProductService,
     private route: ActivatedRoute, private router : Router){

  }

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

}
