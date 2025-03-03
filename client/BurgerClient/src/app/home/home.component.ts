import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CarouselItem } from '../models/carousel-item';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  cartTotalCount: number = 0;
  private carouselData: Record<string, CarouselItem[]> = {};

  constructor(private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ){}

  ngOnInit(): void {
    this.productService.getUItemplateData().subscribe(
      data => this.carouselData = data
    );

    this.cartService.cartTotalQty.subscribe(totalQty => this.cartTotalCount = totalQty);
  }

  viewProductsByCategory(categoryName: string){
    this.router.navigate([`/products/${categoryName}`])
  }
  
}
