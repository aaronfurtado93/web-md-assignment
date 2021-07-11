import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsDetailsComponent} from "./pages/items-details/items-details.component";

const routes: Routes = [
  {
    path: `items-details/:title`,
    component: ItemsDetailsComponent
  },
  {
    path: `items-details`,
    component: ItemsDetailsComponent
  },
  {
    path: ``,
    pathMatch: `full`,
    redirectTo: `items-details`
  },
  {
    path: `**`,
    redirectTo: `items-details`
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
