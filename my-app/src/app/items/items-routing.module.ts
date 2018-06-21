import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';
import { AddItemComponent } from './containers/add-item/add-item.component';
import { EditComponent } from './containers/edit/edit.component';
import { ItemDetailResolverService } from '../core/services/item-detail-resolver.service';

const appRoutes: Routes = [
  { path: 'list', component: ListItemsComponent },
  { path: 'add', component: AddComponent },
  { path: 'additem', component: AddItemComponent },
  { path: 'edit/:id', component: EditComponent, resolve: {item: ItemDetailResolverService} },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
