import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class='center' style="margin-top: 10%;">
      <img src="./assets/img/valiseRouge.jpeg" style="width: 30%;" alt="Trousse pharmacie rouge">
      <h2 class="mt-4">Hey, cette page n'existe pas !</h2>
      <a routerLink="/home" class="btn btn-link mt-3 mb-5 text-decoration-none" >
        Retourner à l'accueil
      </a>
    </div>`,
  styles: []
})
export class PageNotFoundComponent {}
