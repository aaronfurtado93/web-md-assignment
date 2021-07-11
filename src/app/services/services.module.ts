import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ItemsListService} from "./items-list/items-list.service";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ItemsListService
  ]
})
export class ServicesModule { }
