import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { CarouselItem } from '../models/carousel-item';
import { ResponseDto } from '../models/response-dto';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient: HttpClient, private cartService: CartService) {}

  private getHeaders(): HttpHeaders{
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      authorization : `bearer ${token}`
    })
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

  getAllStoreCategories(): Observable<string[]>{
     return this.httpClient.get<string[]>(`${this.baseUrl}/store-categories`);
  }

  getUItemplateData(): Observable<Record<string, CarouselItem[]>>{
    return this.httpClient.get<Record<string, CarouselItem[]>>(`${this.baseUrl}/ui-data`);
  }

  postOrder(): Observable<ResponseDto>{
    const orderProducts = this.cartService.getCart();
    this.cartService.clearCart();
    return this.httpClient.post<ResponseDto>(`${this.baseUrl}/place-order`, orderProducts,
       {headers : this.getHeaders()});
  }

}
