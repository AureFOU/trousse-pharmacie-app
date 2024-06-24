import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component.js';
import { ProductsListComponent } from './products-list/products-list.component.js';
import { AppComponent } from './app.component.js';
import { HomeComponent } from './home/home.component.js';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'products', component: ProductsListComponent},
  { path: 'detail/:id', component: DetailProductComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(
    private route: ActivatedRoute){}
}
