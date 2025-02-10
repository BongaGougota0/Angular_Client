import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CarouselItem } from '../models/carousel-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  private carouselData: Record<string, CarouselItem[]> = {};

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getUItemplateData().subscribe(
      data => this.carouselData = data
    );
  }
  
}
