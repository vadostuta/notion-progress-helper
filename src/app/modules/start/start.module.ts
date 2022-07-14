import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    StartRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class StartModule { }
