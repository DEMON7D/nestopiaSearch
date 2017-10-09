import {Component, Input} from '@angular/core';


@Component({
  selector: 'search-result',
  templateUrl: 'searchResult.html',
  styleUrls: ['searchResult.css']
})

export class SearchResultComponent {
  @Input() response:any;

}
