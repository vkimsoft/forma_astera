import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item';
import { COLLECTION } from '../collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private _collection:Item[];
  constructor() {
    this.collection=COLLECTION;
  }


  /**
   * get collection
   */
  /*public getCollection():Item[]{
    return this.collection;
  }*/
  public get collection() : Item[] {
    return this._collection;
  }
  /**
   * set collection
   */
  /*public setCollection(col:Item[]):void{
    this.collection=col;
  }*/
  public set collection(coll: Item[]) {
    this._collection = coll;
  }

   public addItem(item:Item):void{
     this._collection.push(item);
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
