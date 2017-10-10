import {Component} from '@angular/core';
import {HttpService} from './http.servise';
import {NavService} from "./nav.service";


@Component({
  selector: 'home-search',
  templateUrl: 'homeSearch.html'
})
export class HomeSearchComponent {
  name: string = "";
  searchStatus: string = "to_rent";
  response: any;
  totalPages: number;
  page: number;

  constructor(private http: HttpService, private navPage: NavService) {
    this.navPage.onPageChange.subscribe(
      num => {
        if(typeof (num)=="number")this.search(num);
        else{
          switch (num)
          {
            case ">" :
              if(this.page+1<=this.totalPages)
              this.search(this.page+1);
              break;
            case ">>" :
              this.search(this.totalPages);
              break;
            case "<" :
              this.search(this.page-1);
              break;
            case "<<" :
              this.search(1);
              break;
            default:console.log("неправильно  ");

          }
        }
        console.log(num);
      }
    );
  }


 private search(page) {

    console.log(this.name);
    console.log(this.searchStatus);

    this.http.getData(this.generateUrl(page))
      .subscribe(data => {
        this.page = data.page;
        this.response = data;
        this.totalPages = data.total_pages;
        console.log(data.total_pages);
        console.log(this.page);
        console.log(data);
      });
  }
  generateUrl(page:number){
     return `https://api.nestoria.co.uk/api?encoding=json&listing_type=${this.searchStatus}+&action=search_listings&place_name=${this.name}&page=${page}`;
  }
}
