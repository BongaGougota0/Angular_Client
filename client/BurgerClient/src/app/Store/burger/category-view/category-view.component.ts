import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category-view',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class CategoryViewComponent implements OnInit{
  private products!: Product[];
  private categoryName!: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
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
      next: (data) =>{
        this.products = data;
      },
      error: (error) =>{
        console.log(error);
      }
    })
  }

  addProductToCart(): void
  {

  }

}
