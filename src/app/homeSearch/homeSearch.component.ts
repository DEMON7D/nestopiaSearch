import {Component} from '@angular/core';
import {HttpService} from './http.servise';


@Component({
  selector: 'home-search',
  templateUrl: 'homeSearch.html'
})
export class HomeSearchComponent {
  name: string = "";
  searchStatus: string = "to rent";
  response: any;
  totalPages: number;

  constructor(private http: HttpService) {
  }

  toggle() {

    console.log(this.name);
    console.log(this.searchStatus);

    this.http.getData(this.generateUrl())
      .subscribe(data => {
        this.response = data;
        console.log(data.total_pages);
        console.log(data);
//debugger
          this.totalPages = data.total_pages;
          data.total_pages = 15;
          data.page = 12;
          data.listings.forEach(item => {
            //console.log(item.title);
          });
      });
  }
  generateUrl(){
     return "https://api.nestoria.co.uk/api?encoding=json&listing_type="+
       this.searchStatus+
       "&action=search_listings&place_name='" +
       this.name + "'"
  }
}
