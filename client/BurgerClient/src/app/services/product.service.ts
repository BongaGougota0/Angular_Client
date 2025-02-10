import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'localhost:8080/api/products/';

  constructor(private httpClient: HttpClient) {

   }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}/all`);
  }

  getProductById(productId: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.baseUrl}/${productId}`)
  }

  // updateProduct(updateProduct: Product): Observable<Product>{
  //   return this.httpClient.put<Product>(`${this.baseUrl}/update`, updateProduct)
  // }

}
