import { Component, computed, inject, signal } from '@angular/core';
import { Product } from '../product.js';
import { PRODUCTS } from '../mock-products.js';
import { ProductService } from '../product.service.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly productService = inject(ProductService);
  readonly productList = signal(this.productService.getProductList());
  // Récupération des 3 derniers produits renregistrés
  readonly productListLastRecord = computed(() => {
    this.productList().sort((a:Product, b:Product) => a.recordDate > b.recordDate?-1:1);
    return this.productList().slice(0,3);
  });
}
