import { Component, OnInit } from '@angular/core';
import { Product } from '../product.js';
import { ActivatedRoute, Router } from '@angular/router';
import { PRODUCTS } from '../mock-products.js';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrl: './detail-product.component.css'
})
export class DetailProductComponent implements OnInit{
  productList : Product[] = PRODUCTS;
  product: Product|undefined;

  constructor(private route : ActivatedRoute, private router:Router){}

  ngOnInit(){
    const productId: string|null = this.route.snapshot.paramMap.get('id');
    if(productId){
      this.product = this.productList.find(product => product.id == +productId);
    }
  }

  goToProductsList(){
    this.router.navigate(['/products'])
  }

}
