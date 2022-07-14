import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';
import { DoneItemsPipe } from './done-items.pipe';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardItemComponent,
    DoneItemsPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
