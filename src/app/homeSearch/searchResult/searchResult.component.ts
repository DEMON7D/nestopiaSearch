import {Component, OnDestroy} from '@angular/core';
import {HttpService} from "../http.servise";
import {NavService} from "../nav.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";
import {ISearchResult} from "../ISearchResult";
import {IItem} from "../IItem";
import {ItemService} from "../item.service";
import {IQuery} from "./IQuery";

@Component({
  selector: 'search-result',
  templateUrl: 'searchResult.html',
  styleUrls: ['searchResult.css']
})

export class SearchResultComponent implements OnDestroy {
  response: ISearchResult;
  totalPages: number;
  page: number;
  private name: string;
  private searchStatus: string;
  private querySubscription: Subscription;
  queryParam: IQuery;

  constructor(private http: HttpService,
              private navPage: NavService,
              private route: ActivatedRoute,
              private router: Router,
              private dataServise: DataService,
              private itemServise: ItemService) {

    this.querySubscription = route.queryParams
      .subscribe(
        (queryParam: any) => {

          if(!queryParam['name']){
            return;
          }
          if (this.name == queryParam['name'] && this.searchStatus == queryParam['search']&& this.page == queryParam['page']) {
            return;
          }
          this.name = queryParam['name'];
          this.searchStatus = queryParam['search'];
          this.page = queryParam['page'];
          this.search(this.generateUrl(this.page));
        }
      );


    this.navPage.onPageChange.subscribe(
      num => {
        if (num == this.page) return;
        if (typeof (num) == "number") this.newPage(num);
        else {
          switch (num) {
            case ">" :
              if (this.page + 1 <= this.totalPages)
                this.newPage(this.page + 1);
              break;
            case ">>" :
              this.newPage(this.totalPages);
              break;
            case "<" :
              this.newPage(this.page - 1);
              break;
            case "<<" :
              this.newPage(1);
              break;
            default:
              console.log("неправильно  ");

          }
        }
      }
    );
  }

  private newPage(page) {
    this.router.navigate([`/items`], {queryParams: {name: this.name, search: this.searchStatus, page: page}});
  }

  private search(url) {
    console.log("serch", this.searchStatus, url);
    this.http.getData(url)
      .subscribe(data => {
        this.totalPages = data.total_pages;
        this.page = data.page;
        this.response = data;
      });

  }

  private generateUrl(page) {
    return `https://api.nestoria.co.uk/api?encoding=json&listing_type=${this.searchStatus}&action=search_listings&country=uk&place_name=${this.name}&page=${page}`;
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }

  onclick(item: IItem) {

    this.dataServise.onViewDetalis.next(item);
    //debugger;
    this.queryParam = <IQuery>{
      page: this.page,
      name: this.name,
      searchStatus: this.searchStatus
    };
    /*this.queryParam.page = this.page;
    this.queryParam.name = this.name;
    this.queryParam.searchStatus = this.searchStatus;*/
    console.log("adddddddddd",this.queryParam);
    this.itemServise.onItemChange.next(this.queryParam);
    //this.router.navigate([`/items/info`]);
    this.router.navigate([{outlets: {popup: ['compose']}}]);
    //this.router.navigate([{ outlets: { popup: null }}]);
  }

  onChangedProperty(increased){
    //console.log(increased);
   /* let keywords: string;
    if(increased=="All")keywords="";
    if(increased=="House")keywords="house";
    if(increased=="Flat")keywords="flat";*/
    console.log(increased);
    //this.search(this.generateUrl(1)+`&keywords=${increased}`);
  }
  onChangedBeds(increased){
    console.log(increased);
    if(increased==4){
      this.search(this.generateUrl(1)+`&bedroom_min=4`);
      return;
    }
    this.search(this.generateUrl(1)+`&bedroom_min=${increased}&bedroom_max=${increased}`);
  }
  onChangedBathrooms(increased){
    console.log(increased);
    if(increased==4){
      this.search(this.generateUrl(1)+`&bedroom_min=4`);
      return;
    }
    this.search(this.generateUrl(1)+`&bathroom_min=${increased}&bathroom_max=${increased}`);
  }
}

