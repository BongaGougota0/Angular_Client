import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CarouselItem } from '../models/carousel-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  private carouselData: Record<string, CarouselItem[]> = {};

  constructor(private productService: ProductService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.productService.getUItemplateData().subscribe(
      data => this.carouselData = data
    );
  }

  viewProductsByCategory(categoryName: string){
    this.router.navigate([`/products/${categoryName}`])
  }
  
}
