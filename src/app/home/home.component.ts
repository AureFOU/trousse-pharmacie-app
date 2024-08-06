import { Component } from '@angular/core';
import { Product } from '../product.js';
import { PRODUCTS } from '../mock-products.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  productList : Product[] = PRODUCTS;
  product: Product;

  ngOnInit(){
    this.productList.sort((a:Product, b:Product) => a.recordDate > b.recordDate?-1:1);
    return this.product = this.productList[0];
  }
}
