import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { ItemComponent } from './components/item/item.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsRoutingModule } from './items-routing.module';
import { AddComponent } from './containers/add/add.component';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { EditComponent } from './containers/edit/edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ItemsRoutingModule,
    SharedModule
  ],
  declarations: [ListItemsComponent, ItemComponent, AddComponent, AddItemComponent, EditComponent],
  exports: [ListItemsComponent, AddItemComponent]
})
export class ItemsModule { }
