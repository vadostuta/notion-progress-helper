import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatesRoutingModule } from './updates-routing.module';
import { UpdatesComponent } from './updates.component';


@NgModule({
  declarations: [
    UpdatesComponent
  ],
  imports: [
    CommonModule,
    UpdatesRoutingModule
  ]
})
export class UpdatesModule { }
