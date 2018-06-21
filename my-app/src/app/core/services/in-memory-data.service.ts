import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Item } from '../../shared/interfaces/item';
import { State } from '../../shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const COLLECTION: Item[] = [
      {
        id: 1,
        name: 'Mathieu',
        reference: '1234',
        state: State.ALIVRER
      },
      {
        id: 2,
        name: 'vlad',
        reference: '2311',
        state: State.ENCOURS
      },
      {
        id: 3,
        name: 'Juliette',
        reference: '3344',
        state: State.LIVREE
      }
    ];
    return {COLLECTION};
  }

  constructor() { }
}
