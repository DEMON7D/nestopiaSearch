import {Component, OnInit} from '@angular/core';
import {DataService} from "../data.service";


@Component({
  selector: 'search-result',
  templateUrl: 'searchResult.html',
  styleUrls: ['searchResult.css'],
  providers: [DataService]
})

export class SearchResultComponent  {
  response:any;

  constructor(private dataService: DataService){
      this.dataService.onItemsChange.subscribe(res =>{
        this.response = res;
      });
  }


}
