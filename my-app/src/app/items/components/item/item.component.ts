import { Component, OnInit, Input } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { Observable, pipe } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() item: Item;
public state = State;
  constructor(private collectionService: CollectionService) { }

  ngOnInit() {
  }

  public changeState(state: State) {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.item.state = state;
    this.collectionService.updateItem(this.item)
   // .pipe(
   //   tap(_ => console.log(`updated hero id=${_.id}`))
   // );
     .subscribe((data) => {
      console.log(data);
     });
  }
}
