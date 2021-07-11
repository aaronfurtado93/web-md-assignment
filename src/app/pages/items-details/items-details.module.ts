import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsDetailsComponent } from './items-details.component';
import {ItemsModule} from "../../components/items/items.module";
import {DetailsModule} from "../../components/details/details.module";
import {ServicesModule} from "../../services/services.module";



@NgModule({
  declarations: [
    ItemsDetailsComponent
  ],
  imports: [
    CommonModule,
    ItemsModule,
    DetailsModule,
    ServicesModule
  ],
  exports: [
    ItemsDetailsComponent
  ],
})
export class ItemsDetailsModule { }
