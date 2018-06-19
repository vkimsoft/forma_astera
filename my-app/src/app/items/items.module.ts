import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule
  ],
  declarations: [ListItemsComponent, ItemComponent],
  exports: [ListItemsComponent]
})
export class ItemsModule { }
