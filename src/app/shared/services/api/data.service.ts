import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../models/item.model';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor (
    private http: HttpClient
  ) { }

  getItemsByTag (filter: string): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/getItemsByTag/${filter}`);
  }

  getFilters (): Observable<string[]> {
    return this.http.get<string[]>(`${environment.apiUrl}/getFilters`);
  }

  getAllItems (): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}/getAllItems`);
  }
}
