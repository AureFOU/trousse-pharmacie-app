import { Injectable } from '@angular/core';
import { Product, ProductList } from './product.js';
import { PRODUCTS } from './mock-products.js';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductList(): ProductList{
    return PRODUCTS;
  }

  // Retourne le produit avec l'id indiqué
  getProductId(id:number): Product{
    const product = PRODUCTS.find((product) => product.id === id);

    if(!product){
      throw new Error(`No product found with id ${id}`);
    }
    return product;
  }
}
