import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/shared/models/item.model';
import { DataService } from 'src/app/shared/services/api/data.service';

@Component({
  selector: 'nph-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  public readonly items$: Observable<Item[]> = this.dataService.getItems()

  constructor (
    private dataService: DataService
  ) { }

  ngOnInit (): void {
  }

}
