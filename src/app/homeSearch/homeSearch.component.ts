import {Component} from '@angular/core';


@Component({
  selector: 'home-search',
  templateUrl: 'app/homeSearch/homeSearch.html'
})
export class HomeSearchComponent {
  name: string = "";
  condition: boolean = true;
  private response: any;

  constructor(private http: HttpService) {
  }

  toggle() {
    this.condition = !this.condition;
    console.log(this.name);
    //debugger;
    this.response = this.http.getData("https://api.nestoria.co.uk/api?encoding=json&listing_type=buy&action=search_listings&place_name='" + this.name + "'")
      .subscribe(data => {
        console.log(data);
        console.log(this.response);
      });
  }
}
