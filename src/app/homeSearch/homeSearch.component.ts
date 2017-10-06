import {Component} from '@angular/core';
import {HttpService} from './http.servise';


@Component({
  selector: 'home-search',
  templateUrl: 'homeSearch.html'
})
export class HomeSearchComponent {
  name: string = "";
  searchStatus: string = "to rent";
  condition: boolean = true;
  private response: any;

  constructor(private http: HttpService) {
  }

  toggle() {
    this.condition = !this.condition;
    console.log(this.name);
    console.log(this.searchStatus);

    this.http.getData("https://api.nestoria.co.uk/api?encoding=json&listing_type="+
      this.searchStatus+
      "&action=search_listings&place_name='" +
      this.name + "'")
      .subscribe(data => {
        this.response = data;

          data.listings.forEach(item => {
            //console.log(item.title);
          });
      });
  }
}
