import {Component, Input, OnInit} from '@angular/core';
import {IItem} from "../../data-models/iitem";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() selectedItem: IItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
