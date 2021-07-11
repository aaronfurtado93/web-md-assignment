import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ItemsComponent
  ],
})
export class ItemsModule { }
