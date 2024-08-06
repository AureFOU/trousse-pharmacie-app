import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.js';
import { PRODUCTS } from '../mock-products.js';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  productList : Product[] = PRODUCTS;
  
  constructor(private router:Router){
    let productSelected: Product;
  }

  goToProduct(product:Product){
    this.router.navigate(['/detail/',product.id]);
  }

}
