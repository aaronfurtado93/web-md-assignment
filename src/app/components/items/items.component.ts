import {Component, Input, OnInit} from '@angular/core';
import {IItem} from "../../data-models/iitem";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  @Input() items: IItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
