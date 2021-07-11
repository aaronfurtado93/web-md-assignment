import { Component, OnInit } from '@angular/core';
import {ItemsListService} from "../../services/items-list/items-list.service";
import {IItem} from "../../data-models/iitem";
import {ActivatedRoute} from "@angular/router";
import {map, switchMap} from "rxjs/operators";

@Component({
  selector: 'app-items-details',
  templateUrl: './items-details.component.html',
  styleUrls: ['./items-details.component.scss']
})
export class ItemsDetailsComponent implements OnInit {

  items: IItem[] = [];

  selectedItem: IItem | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemsListService: ItemsListService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        switchMap((paramMap) => {
          return this.itemsListService.get()
            .pipe(
              map((items) => {
                return {
                  items,
                  selectedItem: items.find(item => item.title === paramMap.get(`title`))
                }
            }))
        })
      )
      .subscribe(({items, selectedItem}) => {
        this.items = items;
        this.selectedItem = selectedItem;
        return;
      })
  }

}
