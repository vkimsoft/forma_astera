import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Item } from '../../shared/interfaces/item';
import { CollectionService } from './collection.service';
import {Observable, pipe} from 'rxjs';
import {take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailResolverService implements Resolve<Item> {

  constructor(private collectionService: CollectionService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
    return this.collectionService.getItemById(parseInt(id, 10)).pipe(take(1), tap((data) => {
      if (data) {
      return data;
      } else {
      this.router.navigate(['/items/list']);
      return null;
    }
    }));
  }
}
