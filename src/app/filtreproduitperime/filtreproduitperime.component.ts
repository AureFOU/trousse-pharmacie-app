import { Component, inject, signal, computed } from '@angular/core';
import { Product } from '../product.js';
import { PRODUCTS } from '../mock-products.js';
import { ProductService } from '../product.service.js';

@Component({
  selector: 'app-filtreproduitperime',
  templateUrl: './filtreproduitperime.component.html',
  styleUrl: './filtreproduitperime.component.css'
})
export class FiltreproduitperimeComponent {
  private readonly productService = inject(ProductService);
  readonly productList = signal(this.productService.getProductList());
  readonly lastProductExpired = computed(() => {
    this.productList().sort((a:Product, b:Product) => a.expirationDate > b.expirationDate ?-1:1);
      return this.productList()[this.productList().length-1];
  });

}
