import {Component, OnDestroy} from '@angular/core';
import {DataService} from "../../data.service";
import {IItem} from "../../IItem";
import {Router} from "@angular/router";
import {ItemService} from "../../item.service";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'item-info',
  templateUrl: 'message.html',
  styleUrls: ['./message.css']
})
export class MessageComponent implements OnDestroy{

  favorites: IItem[] = [];
  private item: IItem;
  favorite: boolean = false;
  star:string = "☆";
  private page: number;
  private name: string;
  private searchStatus: string;
  private subscribeData: Subscription;
  private subscribeItem: Subscription;

  constructor(private dataService: DataService,private router: Router,private itemServise: ItemService){

   this.subscribeItem = this.itemServise.onItemChange.subscribe( queryParam =>{
      //debugger
        console.log("message Param",queryParam);

        this.name = queryParam.name;
        this.searchStatus = queryParam.searchStatus;
        this.page = queryParam.page;

      console.log(this.name,this.searchStatus,this.page );
      }
    );
    this.subscribeData = this.dataService.onViewDetalis.subscribe( item=>{
        console.log(item);
        this.favorite = false;
        this.item = item;
        if(localStorage.getItem("favorites")) {
          this.favorites = JSON.parse(localStorage.getItem("favorites"));
          for (var favorite of this.favorites) {
            if (favorite.lister_url == this.item.lister_url) {
              this.favorite = true;
              this.star = "★";
            }
          }
        }
      }
    );
    if(!this.item)this.destroy();
  }
  destroy(){
    this.router.navigate([{ outlets: { popup: null }}]);
    //this.router.navigate([`/items`],{ queryParams: { name: this.name, search: this.searchStatus,page: this.page} });
  }
  setFavorite(){
    if(this.favorite==true){
      this.unsetFavorite();
      return;
    }
    this.star = "★";
    this.favorite = !this.favorite;
    console.log(this.favorite);
    if(localStorage.getItem("favorites")){
      this.favorites = JSON.parse(localStorage.getItem("favorites"));
    }
    console.log(this.favorites);
    this.favorites.push(this.item);
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
  }
  unsetFavorite(){
    this.star = "☆";
    localStorage.clear();
    this.favorites.splice(this.favorites.indexOf(this.item),1);
    localStorage.setItem("favorites", JSON.stringify(this.favorites));
    this.favorite = false;
  }

  ngOnDestroy(){
    this.subscribeData.unsubscribe();
    this.subscribeItem.unsubscribe();
  }
}
