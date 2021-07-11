import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsDetailsComponent } from './items-details.component';
import {ItemsModule} from "../items/items.module";
import {DetailsModule} from "../details/details.module";



@NgModule({
  declarations: [
    ItemsDetailsComponent
  ],
  imports: [
    CommonModule,
    ItemsModule,
    DetailsModule
  ],
  exports: [
    ItemsDetailsComponent
  ],
})
export class ItemsDetailsModule { }
