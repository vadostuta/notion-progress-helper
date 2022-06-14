import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../../models/item.model';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { DatabasePayload } from '../../models/databasePayload.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor (
    private http: HttpClient
  ) { }

  getItemsByTag (filter: string, payload: DatabasePayload): Observable<Item[]> {
    const { integrationKey, databaseId } = payload
    return this.http.get<Item[]>(`${environment.apiUrl}/getItemsByTag/${filter}?integrationKey=${integrationKey}&databaseId=${databaseId}`);
  }

  getFilters (payload: DatabasePayload): Observable<string[]> {
    const { integrationKey, databaseId } = payload
    return this.http.get<string[]>(`${environment.apiUrl}/getFilters?integrationKey=${integrationKey}&databaseId=${databaseId}`);
  }

  getAllItems (payload: DatabasePayload): Observable<Item[]> {
    const { integrationKey, databaseId } = payload
    return this.http.get<Item[]>(`${environment.apiUrl}/getAllItems?integrationKey=${integrationKey}&databaseId=${databaseId}`);
  }
}
