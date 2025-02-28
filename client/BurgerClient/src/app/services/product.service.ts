import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, Observable, tap, throwError } from 'rxjs';
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
    const token = sessionStorage.getItem('USER_TOKEN');
    const cleanToken = token ? token.replace(/"/g, '') : '';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization' : `bearer ${cleanToken}`
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

  postOrder(): Observable<ResponseDto> {
    const orderProducts = this.cartService.getCart();
    console.log('Attempting to place order with products:', orderProducts);
    return this.httpClient.post<ResponseDto>(`http://localhost:8080/api/orders/order`, orderProducts,
      {headers: this.getHeaders(), withCredentials: true}
    ).pipe(
      tap(response => {
        console.log('Order response:', response);
        this.cartService.clearCart();
      }),
      catchError(error => {
        console.error('Order error:', error);
        return throwError(() => error);
      })
    );
  }

}
