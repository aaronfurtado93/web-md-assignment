import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IItemsResponseBody} from "../../data-models/iitems-response-body";
import {map} from "rxjs/operators";
import {IItem} from "../../data-models/iitem";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsListService {

  constructor(
    private httpClient: HttpClient
  ) { }

  get(): Observable<IItem[]> {
    return this.httpClient.get<IItemsResponseBody>(`http://img.staging.medscape.com/pi/iphone/testassets/sampleData.json`)
      .pipe(
        map((responseBody) => {
          return responseBody.items?.filter(item => {
            return !!item.title
          }) || [];
        })
      );
  }
}
