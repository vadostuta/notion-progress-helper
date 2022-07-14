import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';

@Component({
  selector: 'nph-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardItemComponent implements OnInit {
  @Input() public item: Item

  constructor () { }

  public handleLink (url: string): void {
    window.open(url, "_blank");
  }

  ngOnInit (): void {
  }

}
