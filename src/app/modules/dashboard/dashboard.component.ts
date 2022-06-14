import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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

  // TODO: thing about some bigger validation and formGroup
  public readonly databaseLink = new FormControl('', Validators.required);
  public readonly integrationKey = new FormControl('', Validators.required);

  public get isSearceDisabled (): boolean {
    return this.databaseLink.invalid || this.integrationKey.invalid
  }

  private get databaseId (): string {
    const databaseIdValue = this.databaseLink.value
    const notionDomain = 'www.notion.so'
    const splittedUrl = databaseIdValue.split('/')
    const indexOfDatabaseIdDirty = splittedUrl.findIndex((el: string) => el === notionDomain) + 2
    const databaseIdDirty = splittedUrl[indexOfDatabaseIdDirty]
    const databaseId = databaseIdDirty.split('?')[0]

    return databaseId
  }

  constructor (
    private dataService: DataService
  ) { }
  
  public handleSaveIntegrationKey (): void {
    localStorage.setItem('integrationKey', this.integrationKey.value)
  }

  public handleSearch (): void {
    if (this.databaseLink.invalid || this.integrationKey.invalid) {
      return;
    }

    this.filters$ = this.dataService.getFilters(this.getPayloadData())
    this.getAllItems()
  }

  public handeSearchClear (): void {
    this.databaseLink.reset()
  }

  public handeIntegrationKeyClear (): void {
    this.integrationKey.reset()
  }

  public handleFilter (filter: string): void {
    this.dataService.getItemsByTag(filter, this.getPayloadData()).pipe(take(1)).subscribe(res => {
      this.items$.next(res)
    })
  }

  public handleClearFilters (): void {
    this.getAllItems()
  }

  ngOnInit (): void {
    const integrationKey = localStorage.getItem('integrationKey')
    if (integrationKey) {
      this.integrationKey.setValue(integrationKey)
    }
  }

  private getAllItems (): void {
    this.dataService.getAllItems(this.getPayloadData()).pipe(take(1)).subscribe(res => {
      this.items$.next(res)
    })
  }

  private getPayloadData (): DatabasePayload {
    return ({
      integrationKey: this.integrationKey.value,
      databaseId: this.databaseId
    })
  }

}
