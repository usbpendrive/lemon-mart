import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InventoryRoutingModule } from './inventory-routing.module'
import { InventoryHomeComponent } from './inventory-home/inventory-home.component'
import { StockEntryComponent } from './stock-entry/stock-entry.component'
import { ProductsComponent } from './products/products.component'
import { CategoriesComponent } from './categories/categories.component'
import { InventoryComponent } from './inventory.component'
import { MaterialModule } from '../material.module'

@NgModule({
  imports: [CommonModule, MaterialModule, InventoryRoutingModule],
  declarations: [
    InventoryHomeComponent,
    StockEntryComponent,
    ProductsComponent,
    CategoriesComponent,
    InventoryComponent
  ]
})
export class InventoryModule {}
