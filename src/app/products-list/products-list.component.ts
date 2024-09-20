import { Component, inject, OnInit, signal } from '@angular/core';
import { Product } from '../product.js';
import { PRODUCTS } from '../mock-products.js';
import { ProductService } from '../product.service.js';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  private readonly productService = inject(ProductService);
  readonly productList = signal(this.productService.getProductList());
}
