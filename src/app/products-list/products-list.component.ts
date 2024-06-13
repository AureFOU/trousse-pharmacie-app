import { Component } from '@angular/core';
import { Product } from '../product.js';
import { PRODUCTS } from '../mock-products.js';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  productList : Product[] = PRODUCTS;


}