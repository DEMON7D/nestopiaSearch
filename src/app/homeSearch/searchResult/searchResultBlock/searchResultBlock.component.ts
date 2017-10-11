import {Component, Input} from '@angular/core';

@Component({
  selector: 'search-result-block',
  templateUrl: 'searchResultBlock.html',
  styleUrls: ['searchResultBlock.css']
})

export class SearchResultBlockComponent {
@Input() item;

}
