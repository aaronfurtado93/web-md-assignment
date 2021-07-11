import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ItemsDetailsModule} from "./pages/items-details/items-details.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemsDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
