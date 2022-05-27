import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from '../../models/item.model';
import { ITEMS } from '../../models/mock/item.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getItems (): Observable<Item[]> {
    return of(ITEMS)
  }
}
