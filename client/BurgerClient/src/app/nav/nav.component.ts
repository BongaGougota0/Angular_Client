import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { DataStorageServiceService } from '../services/data-storage-service.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  cartTotalCount: number = 0;
  wishListCount: number = 0;
  categories: string[] = [];
  isLoggedIn = false;

  constructor(private productsService: ProductService,
     private router: Router,
     private cartService: CartService
    , private dataStorageService: DataStorageServiceService){}

  ngOnInit(): void{
    this.getStoreCategories();

    if(this.dataStorageService.getUserEmail()){
      this.isLoggedIn = true;
    }
  }

  getStoreCategories(): void{
    this.productsService.getAllStoreCategories().subscribe(
      {
        next: (categories) => {
          this.categories = categories;
        },
        error: (error) => {
          console.log(`We couldnt retrieve store categories. ${error}`);
        }
      })
  }

  logOut(): void{
    this.dataStorageService.clearAuthData();
    this.router.navigate(['/home']);
  }

  navigationDetails(): void{
     this.cartTotalCount = this.cartService.getCart().reduce((total, item) => total += item.productCount, 0);
     this.wishListCount = this.cartService.getWishList().reduce((total, item) => total += item.productCount, 0)
  }

}
