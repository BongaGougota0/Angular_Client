import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { CarouselItem } from '../models/carousel-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient) {

   }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}/all`);
  }

  getProductById(productId: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/${productId}`)
  }

  getProductsByCategory(categoryName: string): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}/category?category=${categoryName}`)
  }

  getUItemplateData(): Observable<Record<string, CarouselItem[]>>{
    return this.httpClient.get<Record<string, CarouselItem[]>>(`${this.baseUrl}/ui-data`);
  }

}
