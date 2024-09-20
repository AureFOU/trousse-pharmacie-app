import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component.js';
import { ProductsListComponent } from './products-list/products-list.component.js';
import { AppComponent } from './app.component.js';
import { HomeComponent } from './home/home.component.js';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component.js';

const routes: Routes = [
  { path: 'home', component: HomeComponent,title:'Home'},
  { path: 'products', component: ProductsListComponent, title:'Liste produits'},
  { path: 'detail/:id', component: DetailProductComponent, title:'Produit'},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(
    private route: ActivatedRoute){}
}
