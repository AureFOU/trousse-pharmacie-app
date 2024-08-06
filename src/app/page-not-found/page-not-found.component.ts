import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <div class='center' style="margin-top: 10%;">
      <img src="./assets/img/valiseRouge.jpeg" style="width: 40%;" alt="Trousse pharmacie rouge">
      <h1>Hey, cette page n'existe pas !</h1>
      <a routerLink="/home" class="waves-effect waves-teal btn-flat">
        Retourner à l' accueil
      </a>
    </div>`,
  styles: []
})
export class PageNotFoundComponent {}
