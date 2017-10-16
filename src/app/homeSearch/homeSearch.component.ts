import {Component} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'home-search',
  templateUrl: 'homeSearch.html',
  styleUrls: ['homeSearch.css']
})
export class HomeSearchComponent {
  name: string = "";
  searchStatus: string = "rent";

  constructor(private router : Router) {

  }

 private search() {
    this.router.navigate([`/items`],{ queryParams: { name: this.name, search: this.searchStatus,page: 1} });
  }
}
