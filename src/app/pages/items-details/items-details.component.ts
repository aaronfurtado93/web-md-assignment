import { Component, OnInit } from '@angular/core';
import {ItemsListService} from "../../services/items-list/items-list.service";
import {IItem} from "../../data-models/iitem";

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss']
})
export class ItemsDetailsComponent implements OnInit {

  itemsList: IItem[] = [];

  constructor(
    private itemsListService: ItemsListService
  ) { }

  ngOnInit(): void {
    this.itemsListService.get()
      .subscribe(value => this.itemsList = value)
  }

}
