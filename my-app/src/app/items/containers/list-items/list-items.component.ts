import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit, OnDestroy {
   collection: Observable<Item[]>;
  // collection: Item[];
  // sub: Subscription;

  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
    // this.collection = this.collectionService.collection;
   // this.sub = this.collectionService.collection.subscribe((data) => {
    //  console.log(data);
    //  this.collection = data;
    // });
    this.collection = this.collectionService.collection;
  }
   ngOnDestroy(): void {
  // this.sub.unsubscribe();
   }

}
