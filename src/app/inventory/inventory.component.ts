import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-inventory',
  template: `
    <mat-toolbar color="accent" fxLayoutGap="8px">
      <a mat-button routerLink="/inventory/home" routerLinkActive="active-link">
        Inventory's Dashboard
      </a>
      <a mat-button routerLink="/inventory/stockEntry" routerLinkActive="active-link">
        Stock Entry
      </a>
      <a mat-button routerLink="/inventory/products" routerLinkActive="active-link">
        Products
      </a>
      <a mat-button routerLink="/inventory/categories" routerLinkActive="active-link">
        Categories
      </a>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      div[fxLayout] {
        margin-top: 32px;
      }
    `,
    `
      .active-link {
        font-weight: bold;
        border-bottom: 2px solid #c35e1d;
      }
    `
  ]
})
export class InventoryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
