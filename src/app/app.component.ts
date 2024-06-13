import { Component } from '@angular/core';
import { PRODUCTS } from './mock-products.js';
import { Product } from './product.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ma trousse à pharmacie';
}
