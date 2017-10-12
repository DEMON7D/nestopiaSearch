import {Component, OnDestroy} from '@angular/core';
import {HttpService} from "../http.servise";
import {NavService} from "../nav.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";
import {ISearchResult} from "../ISearchResult";
import {IItem} from "../IItem";

@Component({
  selector: 'search-result',
  templateUrl: 'searchResult.html',
  styleUrls: ['searchResult.css']
})

export class SearchResultComponent implements  OnDestroy{
  response: ISearchResult;
  totalPages: number;
  page: number;
  private name: string;
  private searchStatus: string;
  private querySubscription: Subscription;

  constructor( private http: HttpService,private navPage: NavService,private route: ActivatedRoute,private router : Router,private dataServise: DataService){
    //this.search(this.generateUrl(1));
   // debugger;
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.response = null;
        this.name = queryParam['name'];
        this.searchStatus = queryParam['search'];
        this.page = queryParam['page'];
        console.log("name:",this.name);
        console.log("searchStatus:",this.searchStatus);
        this.search(this.generateUrl(this.page));
      }
    );


    this.navPage.onPageChange.subscribe(
      num => {
        if(num==this.page) return;
        if(typeof (num)=="number")this.newPage(num);
        else{
          switch (num)
          {
            case ">" :
              if(this.page+1<=this.totalPages)
                this.newPage(this.page+1);
              break;
            case ">>" :
              this.newPage(this.totalPages);
              break;
            case "<" :
              this.newPage(this.page-1);
              break;
            case "<<" :
              this.newPage(1);
              break;
            default:console.log("неправильно  ");

          }
        }
      }
    );
  }

  private newPage(page){
    this.router.navigate([`/items`],{ queryParams: { name: this.name, search: this.searchStatus,page: page} });
  }

  private search(url) {
  console.log("serch",this.searchStatus);
    this.http.getData(url)
      .subscribe(data => {
        this.totalPages = data.total_pages;
        this.page = data.page;
        this.response = data;

      });

  }

  private generateUrl(page){
     return `https://api.nestoria.co.uk/api?encoding=json&listing_type=${this.searchStatus}&action=search_listings&country=uk&place_name=${this.name}&page=${page}`;
  }

  ngOnDestroy(){
    this.querySubscription.unsubscribe();
  }

  onclick(item: IItem){
    console.log(item);
    this.dataServise.onViewDetalis.next(item);
    this.router.navigate([`/items/info`]);
  }

}

