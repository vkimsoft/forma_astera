import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
// import { COLLECTION } from '../collection';
import { HttpClient } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private _collection: Observable<Item[]>;
  private url = 'api/COLLECTION';
  constructor(private http: HttpClient) {
    this._collection = this.http.get<Item[]>(this.url); // new InMemoryDataService().createDb().COLLECTION;
  }


  /**
   * get collection
   */
  /*public getCollection():Item[]{
    return this.collection;
  }*/
  public get collection(): Observable<Item[]> {
    return this._collection;
  }
  /**
   * set collection
   */
  /*public setCollection(col:Item[]):void{
    this.collection=col;
  }*/
  public set collection(coll: Observable<Item[]>) {
    this._collection = coll;
  }

   public addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url, item);
    // .pipe(
    //  tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
    //  catchError(this.handleError<Hero>('addHero'))
    // );
     // this._collection.push(item);
   }
   public updateItem(item: Item): Observable<Item>  {
    return this.http.put<Item>(this.url, item);
   }
   public getItemById(id: number) {
     return this.http.get<Item>(`${this.url}/${id}`);
   }
  /**
   *
   * get item from collection
   * */

  /**
   *
   * update item in collection
   * */

  /**
   *
   * delete item in collection
   * */

}
