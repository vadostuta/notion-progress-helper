import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { Item } from 'src/app/shared/models/item.model';
import { DataService } from 'src/app/shared/services/api/data.service';

@Component({
  selector: 'nph-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  public readonly filters$: Observable<string[]> = this.dataService.getFilters()

  public readonly items$: BehaviorSubject<Item[]> = new BehaviorSubject<any>(null)

  constructor (
    private dataService: DataService
  ) { }

  public handleFilter (filter: string): void {
    this.dataService.getItemsByTag(filter).pipe(take(1)).subscribe(res => {
      this.items$.next(res)
    })
  }

  public clearFilters (): void {
    this.getAllItems()
  }

  ngOnInit (): void {
    this.getAllItems()
  }

  getAllItems (): void {
    this.dataService.getAllItems().pipe(take(1)).subscribe(res => {
      this.items$.next(res)
    })
  }

}
