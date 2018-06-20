import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { AddComponent } from './containers/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ItemsRoutingModule,
    SharedModule
  ],
  declarations: [ListItemsComponent, ItemComponent, AddComponent],
  exports: [ListItemsComponent]
})
export class ItemsModule { }
