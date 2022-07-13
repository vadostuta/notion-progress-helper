import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { DatabasePayload } from 'src/app/shared/models/databasePayload.model';
import { Item } from 'src/app/shared/models/item.model';
import { DataService } from 'src/app/shared/services/api/data.service';

@Component({
  selector: 'nph-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  public filters$: Observable<string[]>
  public readonly items$: BehaviorSubject<Item[]> = new BehaviorSubject<any>(null)

  private get databaseId (): string {
    return this._databaseId
  }

  private set databaseId (value: string) {
    const databaseIdValue = value
    const notionDomain = 'www.notion.so'
    const splittedUrl = databaseIdValue.split('/')
    const indexOfDatabaseIdDirty = splittedUrl.findIndex((el: string) => el === notionDomain) + 2
    const databaseIdDirty = splittedUrl[indexOfDatabaseIdDirty]
    const databaseId = databaseIdDirty.split('?')[0]

    this._databaseId = databaseId
  }

  private _databaseId: string
  private _integrationKey: string

  constructor (
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  public handleFilter (filter: string): void {
    this.dataService.getItemsByTag(filter, this.getPayloadData()).pipe(take(1)).subscribe(res => {
      this.items$.next(res)
    })
  }

  public handleClearFilters (): void {
    this.getAllItems()
  }

  ngOnInit (): void {
    this.activatedRoute.queryParams.pipe(take(1)).subscribe(res => {
      // return to default url if missing required data
      if (!res['integrationKey'] || !res['databaseLink']) {
        this.router.navigate([''])
      }

      // set query params
      this.databaseId = res['databaseLink']
      this._integrationKey = res['integrationKey']

      // init filters
      this.filters$ = this.dataService.getFilters(this.getPayloadData())

      // init default all items
      this.getAllItems()
    })
  }

  private getAllItems (): void {
    this.dataService.getAllItems(this.getPayloadData()).pipe(take(1)).subscribe(res => {
      this.items$.next(res)
    })
  }

  private getPayloadData (): DatabasePayload {
    return ({
      integrationKey: this._integrationKey,
      databaseId: this._databaseId
    })
  }

}
