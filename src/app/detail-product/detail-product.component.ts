import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { Product } from '../product.js';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS } from '../mock-products.js';
import { ProductService } from '../product.service.js';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent {
  private readonly productService = inject(ProductService);
  readonly route = inject(ActivatedRoute);
  readonly productId = Number(this.route.snapshot.paramMap.get('id'));
  readonly product = signal(this.productService.getProductId(this.productId)).asReadonly();


}
